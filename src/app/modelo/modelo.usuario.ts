export class UsuarioModelo{
    constructor(
        public _id: String,
        public nombre : String,
        public correo : String,
        public ciudad : String,
        public contrasena : String,
        public tipoUsuario : String,
        public estado : Boolean
    ){}
}