import { ChangeEvent, FormEvent, useState } from 'react'
import { countries } from '../data/countries'
import { SearchType } from '../types'
import { Alert } from './Alert'

type FormProps = {
    fetchWeather: (search: SearchType) => Promise<void>
}

export const Form = ({ fetchWeather }: FormProps) => {
    const [search, setSearch] = useState<SearchType>({
        city: '',
        country: '',
    })

    const [alert, setAlert] = useState('')

    const handleChange = (
        e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
    ) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (Object.values(search).includes('')) {
            setAlert('Todos los campos son obligatorios')
            return
        }
        fetchWeather(search)
    }

    return (
        <form
            className='flex flex-col gap-8'
            onSubmit={handleSubmit}
        >
            {alert && <Alert>{alert}</Alert>}
            <div className='flex flex-col gap-8'>
                <label htmlFor='city'>Ciudad:</label>
                <input
                    className='p-4 border-[0.3rem] border-white text-white text-3xl font-normal rounded-2xl placeholder:text-white'
                    id='city'
                    type='text'
                    name='city'
                    placeholder='Ciudad'
                    value={search.city}
                    onChange={handleChange}
                />
            </div>

            <div className='flex flex-col gap-8'>
                <label htmlFor='country'>Pais:</label>
                <select
                    className='p-4 border-[0.3rem] border-white text-white text-3xl font-normal rounded-2xl placeholder:text-white'
                    name='country'
                    id='country'
                    value={search.country}
                    onChange={handleChange}
                >
                    <option
                        className='text-black'
                        value=''
                    >
                        -- Seleccione un Pais --
                    </option>
                    {countries.map((country) => (
                        <option
                            className='text-black'
                            key={country.code}
                            value={country.code}
                        >
                            {country.name}
                        </option>
                    ))}
                </select>
            </div>
            <input
                className='bg-primary border-none text-white font-bold text-2xl uppercase cursor-pointer p-4'
                type='submit'
                value='Consultar Clima'
            />
        </form>
    )
}
