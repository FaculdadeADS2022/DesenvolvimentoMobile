export interface useImcResult {
    setPesoBoi: (value: string) => void,
    setAlturaBoi: (value: string) => void,
    calculate: () => void,
    imcBoi: number | undefined
}