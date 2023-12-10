type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNacimento?: string
}

type keys = 'rg'

type Usuario2 = Omit<Usuario, keys>;

const cadastrarUsuário = (info: Usuario): Usuario => {
    return info;
}