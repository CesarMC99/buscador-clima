import { Weather } from '../hooks/useWeather'
import { formatTemperature } from '../utils'

type WeatherDetailProps = {
    weather: Weather
}

export const WeatherDetail = ({ weather }: WeatherDetailProps) => {
    return (
        <div className='flex flex-col gap-8 bg-white text-black rounded-2xl text-center p-12'>
            <h2 className='font-black text-4xl'>Clima de: {weather.name}</h2>
            <p className='text-8xl font-black m-0 '>
                {formatTemperature(weather.main.temp)}&deg;C
            </p>
            <div className='flex justify-center gap-20'>
                <p className='font-black'>
                    Min:{' '}
                    <span className='font-normal'>
                        {formatTemperature(weather.main.temp_min)}&deg;C
                    </span>
                </p>
                <p className='font-black'>
                    Min:{' '}
                    <span className='font-normal'>
                        {formatTemperature(weather.main.temp_min)}&deg;C
                    </span>
                </p>
            </div>
        </div>
    )
}
