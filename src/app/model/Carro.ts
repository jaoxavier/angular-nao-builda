export { Carro };

class Carro {
    private _modelo?: string | undefined;
    private _placa?: string | undefined;
    private _valorDiaria?: number | undefined;
    private _disponivel?: boolean | undefined;
    
    public getModelo(): string | undefined {
        return this._modelo;
    }
    public setModelo(value: string | undefined) {
        this._modelo = value;
    }
    
    public getPlaca(): string | undefined {
        return this._placa;
    }
    public setPlaca(value: string | undefined) {
        this._placa = value;
    }
    public getValorDiaria(): number | undefined {
        return this._valorDiaria;
    }
    public setValorDiaria(value: number | undefined) {
        this._valorDiaria = value;
    }
    public getDisponivel(): boolean | undefined {
        return this._disponivel;
    }
    public setDisponivel(value: boolean | undefined) {
        this._disponivel = value;
    }
    
    
    
}
