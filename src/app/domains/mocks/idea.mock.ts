import { IdeaModel } from "../models/idea.model"
import { v4 as uuidv4 } from 'uuid';

export const getIdeaMocks = () => {
    const ideas = [];

    const idea1 = new IdeaModel();
    idea1._id = uuidv4();
    idea1.name = 'Melhorar superapp';
    idea1.desc = 'Descrição da ideia número 1 sobre como melhorar o superapp promovendo uma melhor experiência de usuário';
    idea1.date = new Date();
    idea1.author = 'Fulano de tal';
    idea1.status = 'success';
    idea1.position = 'Primeiro lugar';
    idea1.tags = ['Inovação'];

    ideas.push(idea1);

    const idea2 = new IdeaModel();
    idea2._id = uuidv4();
    idea2.name = 'Evoluir busca no site Magalu';
    idea2.desc = 'Descrição da ideia número 2 sobre como melhorar a busca no site Magalu utilizando elastic search';
    idea2.date = new Date();
    idea2.author = 'Fulano de tal 2';
    idea2.status = 'primary';
    idea2.position = 'Segundo lugar';
    idea2.tags = ['Investimento'];

    ideas.push(idea2);

    const idea3 = new IdeaModel();
    idea3._id = uuidv4();
    idea3.name = 'Redução de despesas';
    idea3.desc = 'Descrição da ideia número 3 sobre diminuir despesas';
    idea3.date = new Date();
    idea3.author = 'Fulano de tal 3';
    idea3.status = 'tertiary';
    idea3.position = 'Terceiro lugar';
    idea3.tags = ['Redução de despesas'];

    ideas.push(idea3);

    const idea4 = new IdeaModel();
    idea4._id = uuidv4();
    idea4.name = 'Ideia número 4';
    idea4.desc = 'Descrição da ideia número 4...';
    idea4.date = new Date();
    idea4.author = 'Fulano de tal 4';
    // idea4.status = 'tertiary';
    idea4.position = 'Terceiro lugar';
    idea4.tags = ['Categoria'];

    ideas.push(idea4);

    const idea5 = new IdeaModel();
    idea5._id = uuidv4();
    idea5.name = 'Ideia número 5';
    idea5.desc = 'Descrição da ideia número 4...';
    idea5.date = new Date();
    idea5.author = 'Fulano de tal 4';
    // idea5.status = 'tertiary';
    idea5.position = 'Quinto lugar';
    idea5.tags = ['Categoria'];

    ideas.push(idea5);

    const idea6 = new IdeaModel();
    idea6._id = uuidv4();
    idea6.name = 'Ideia número 6';
    idea6.desc = 'Descrição da ideia número 6...';
    idea6.date = new Date();
    idea6.author = 'Fulano de tal 6';
    // idea6.status = 'tertiary';
    idea6.position = 'Sexto lugar';
    idea6.tags = ['Categoria'];

    ideas.push(idea6);

    return ideas;
}