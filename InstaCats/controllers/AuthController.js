//1º Preciso importar o arquivo de modulo
const User = require('../models/User')

//Dependência para criptografia
const 

module.exports = class AuthController{
    static login(require, response){
        //render -> diretório do projeto - nomeArquivo
        //redirect -> Mandar para uma ROTA - /
        return response.render('auth/login');
    }

    static async loginPost(request, response){
        const {email, password} = request.body;

        //Verificar se usuário existe
        const user = await User.findOne({where: {email:email}})
            if(!user){
                request.flash("message", "Usuário não encontrado")
                response.render("home")
                return
            }
            console.log(user)
        //Validação das senhas
        const passwordMath = bcrypt.compareSync(password, user.password)
        if(!passwordMath){
            request.flash("message", "Senha Inválida")
            response.render("home")
            return
        }
        
        request.flash("message", "Autenticação realizada com sucesso!")
        request.session.save(()=>{

        })
    }
     
    static register(require, response){
        response.render('auth/register');
        return
    }
    static async registerPost(request, response){
        const { name, email, password ,passwordconfirm } = request.body;

        console.log(name, email, password, passwordconfirm);

        if(password != passwordconfirm){
            request.flash("message", "As senhas não conferem, tente novamente");
            response.render("home");
        }

        //Validação de o usuário já existe
        const checkIfUserExists = await User.findOne({where: {email:email}})
        console.log(checkIfUserExists)
        if(checkIfUserExists){
            request.flash("message", "O e-mail já está em uso!")
            response.render("home")
            return
        }

        //Boas prática - Criptografar a Senha do usuário
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)

        const user = {
            name,
            email,
            password: hashedPassword
        }

        try{
            await User.create(user)
            
            request.flash("message", "Cadastro realizado com sucesso!")
            
            request.session.save(()=>{
                response.redirect('/')
            })
        } catch(error) {
            console.log(error)
        }
        
    }
    
    static logout(request, response){
        request.session.destroy();
        response.redirect('/')
    }
};