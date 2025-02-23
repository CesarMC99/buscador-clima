import { Alert } from './components/Alert'
import { Form } from './components/Form'
import { Spinners } from './components/Spinners'
import { WeatherDetail } from './components/WeatherDetail'
import { useWeather } from './hooks/useWeather'

function App() {
    const { weather, fetchWeather, hasWeatherData, loading, notFound } =
        useWeather()

    return (
        <>
            <h1 className='text-center text-5xl mt-20'>Buscador de Clima</h1>
            <div className='w-[95%] max-w-[100rem] m-auto md:grid md:grid-cols-2 md:items-center gap-16 md:mt-20'>
                <Form fetchWeather={fetchWeather} />
                {loading && <Spinners />}
                {hasWeatherData && <WeatherDetail weather={weather} />}
                {notFound && <Alert>Ciudad no encontrada</Alert>}
            </div>
        </>
    )
}

export default App
