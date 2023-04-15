import { useState } from "react"
import { useImcResult } from "./interfaces"

export const useImc = (): useImcResult => {
    const [pesoBoi, setPesoBoi] = useState('')
    const [alturaBoi, setAlturaBoi] = useState('')
    const [imcBoi, setImcBoi] = useState<number>()

const calculate = () => {
    const fAlturaBoi = parseFloat(alturaBoi)
    const fPesoBoi = parseFloat(pesoBoi)
    const imc = fPesoBoi / (fAlturaBoi * fAlturaBoi)
    setImcBoi(imc)
    }

    return{
        setPesoBoi,
        setAlturaBoi,
        calculate,
        imcBoi
    }
}