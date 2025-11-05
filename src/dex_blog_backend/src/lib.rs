use ic_cdk::{api::time, query, update};
use std::cell::RefCell;
use std::collections::HashMap;

// --- Estruturas de Dados (Modelos) ---

// Post model: O que será lido e escrito
// #[derive(candid::CandidType, ...)] é crucial para a comunicação Candid/TypeScript
#[derive(candid::CandidType, Clone, serde::Serialize, serde::Deserialize)]
pub struct Post {
    pub id: u64,
    pub title: String,
    pub content: String,
    pub author: String,
    pub created_at: u64,
}

// Payload para criar um novo post
#[derive(candid::CandidType, serde::Deserialize)]
pub struct CreatePostPayload {
    pub title: String,
    pub content: String,
    pub author: String,
}

// O estado do Canister (armazenamento de dados)
// Usamos thread_local! e RefCell para um estado mutável.
thread_local! {
    // Armazena os posts: ID -> Post
    static POSTS: RefCell<HashMap<u64, Post>> = RefCell::default();
    // Contador para gerar IDs únicos
    static NEXT_ID: RefCell<u64> = RefCell::new(0);
}

// --- Funções de API (Update e Query) ---

// 1. Função para criar um novo post (Update Call - Altera o estado)
#[update]
fn create_post(payload: CreatePostPayload) -> Post {
    // Acessa o ID atual e incrementa para o próximo
    NEXT_ID.with(|id_counter| {
        let mut counter = id_counter.borrow_mut();
        *counter += 1;
        let id = *counter;

        // Cria o novo Post
        let new_post = Post {
            id,
            title: payload.title,
            content: payload.content,
            author: payload.author,
            created_at: time(), // Tempo do ICP em nanossegundos
        };

        // Salva o Post no HashMap
        POSTS.with(|posts| {
            posts.borrow_mut().insert(id, new_post.clone());
        });

        new_post
    })
}

// 2. Função para listar todos os posts (Query Call - Leitura de estado)
#[query]
fn list_posts() -> Vec<Post> {
    POSTS.with(|posts| posts.borrow().values().cloned().collect())
}

// 3. Função para obter um post por ID (Query Call)
#[query]
fn get_post(id: u64) -> Option<Post> {
    POSTS.with(|posts| posts.borrow().get(&id).cloned())
}
