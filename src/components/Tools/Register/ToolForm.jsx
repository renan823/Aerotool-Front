import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const ToolForm = () => {

  const [type, setType] = useState("commom");

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data, type)
  }

  const selecteStyle = "rounded w-2/4 px-5 py-2 text-xl font-bold bg-gradient-to-r m-2 from-accent to-primary text-white"
  const normalStyle = "rounded w-2/4 px-5 py-2 text-xl font-bold bg-primaryLight m-2 text-primary"

  const rules = {
    name: {
      required: "Preencha esse campo",
      minLength: {
              message: "Use no mínimo 5 caracteres",
              value: 5
      },
      maxLength: {
          message: "Use no máximo 30 caracteres",
          value: 30
      },
    },
    description: {
      required: "Preencha esse campo",
      minLength: {
              message: "Use no mínimo 10 caracteres",
              value: 10
      },
      maxLength: {
          message: "Use no máximo 30 caracteres",
          value: 50
      },
    }
  }

  return (
    <div>
      <h1 className="text-primary font-bold text-3xl p-6">FERRAMENTA</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row">
        <div className="flex flex-row w-3/4">
          <div className="flex flex-col w-full">
            <div className="w-full flex-col p-6">
              <label htmlFor="name" className="text-primary font-bold text-lg w-full my-2">NOME DA FERRAMENTA</label>
              <input name="name" placeholder="Nome..." type="text" {...register("name", rules.name)} className="w-11/12 rounded-md bg-primaryLight p-3 my-2"/>
              <div>
                {errors.name && <span className="text-primary font-bold m-3">{errors.name.message}</span>}
              </div>
            </div>
            <div className="w-full flex-col p-6">
              <label htmlFor="description" className="text-primary font-bold text-lg w-full my-2">DESCRIÇÃO DA FERRAMENTA</label>
              <textarea name="description" placeholder="Descrição..." cols="30" rows="10" {...register("description", rules.description)} r className="w-11/12 rounded-md bg-primaryLight p-3 my-2"></textarea>
              <div>
                {errors.description && <span className="text-primary font-bold m-3">{errors.description.message}</span>}
              </div>
            </div>
            <button className="rounded w-fit px-5 py-2 text-xl font-bold bg-gradient-to-r mx-6 from-accent to-primary text-white" type="submit">Salvar</button>
          </div>
        </div>
        <div className="flex w-1/4 flex-col self-center justify-center">
          <h2 className="text-center text-lg text-primary font-bold">TIPO DA FERRAMENTA</h2>
          <div className="flex flex-col items-center p-3">
            <button type="button" onClick={() => setType("commom")} className={ type === "commom" ? `${selecteStyle}` : `${normalStyle}` }>Comum</button>
            <button type="button" onClick={() => setType("patrimony")} className={ type === "patrimony" ? `${selecteStyle}` : `${normalStyle}` }>Patrimônio</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ToolForm;