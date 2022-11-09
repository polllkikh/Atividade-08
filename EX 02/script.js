    const aluno = [
        { nome: 'João' ,
         nota: 5,
        turma: '1B',
        },

        {
            nome:'Sofia' ,
            nota: 4
                 ,
            turma:'1B'
        },
        {
            nome:'Paulo' ,
            nota: 6,
            turma: '2C'
        }
    ];
    function alunoAprovados(alunos, media){
        let aprovados = [];
        for (let i = 0; i < alunos.length; i++) {
             let {nota, nome} = aluno[i];
            if (nota >= media){
                aprovados.push(nome);
            }
        }
        return aprovados;
    }
    console.log(alunosAprovadeos(alunos, 5));