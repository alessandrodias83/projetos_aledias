import { useEffect, useState } from "react"
import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"
import styles from "./ProjectForm.module.css"

 function ProjectForm({ handleSubmit, btnText, projectData }) {
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState (projectData || {})

   useEffect(() => {
    fetch('http://localhost:5000/categories', {
        method:"GET",
        headers: {
            'Content-Type' : 'application/json',
        },
    })
    .then((resp) => resp.json())
    .then((data) => {
        setCategories(data)
    })
    .catch((err) => console.log(err))
   }, [])

   const submit = (e) => {
    e.preventDefault()
    handleSubmit(project)
   }

   function handleChange(e) { 
    const { name, value } = e.target; 
    setProject((prevProject) => ({ ...prevProject, [name]: value })); 
}

   function handleCategory(e) { 
    const selectedCategory = e.target.options[e.target.selectedIndex]; 
    setProject((prevProject) => ({ 
        ...prevProject, 
        category: { 
            id: e.target.value, 
            name: selectedCategory.text, 
        }, 
    })); 
}

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
            type="text"
            text="Nome do Projeto"
            name="name"
            placeholder="Insira o nome do projeto"
            handleOnChange={handleChange}
            value={project.name ? project.name : ''}
            />

<Input 
            type="number"
            text="Orçamento do Projeto"
            name="budget"
            placeholder="Insira o orçamento total"
            handleOnChange={handleChange}
            value={project.budget ? project.budget : ''}
            />
            
            <Select 
            name="category_id"
            text="Selecione a categoria"
            option={categories}
            handleOnChange={handleCategory}
            value={project.category ? project.category.id : ''}
            />

            <SubmitButton text={btnText}/>
        </form>

    )
}

export default ProjectForm