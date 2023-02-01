import React, {useState} from "react";
import {Sub} from "../types";

const Form = () => {
    interface FormState {
        inputValues: Sub
    }

    const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
        nick: '',
        subMonths: 0,
        avatar: '',
        description: ''
    })
    const handleSubmit = () => {
    }

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValues({
            ...inputValues,
            [evt.target.name]: evt.target.value
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputValues.nick} type='text' name='nick' placeholder='nick'/>
                <input onChange={handleChange} value={inputValues.subMonths} type='number' name='subMonths'
                       placeholder='subMonths'/>
                <input onChange={handleChange} value={inputValues.avatar} type='text' name='avatar'
                       placeholder='avatar'/>
                <textarea onChange={handleChange} value={inputValues.description} name='description'
                          placeholder='description'/>
                <button>Save new Sub!</button>
            </form>
        </div>
    )
}

export default Form