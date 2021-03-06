export default
{
    "swagger": "2.0",
    "info": {
      "description": "Requisição e submissão dos dados de cadastro no banco de dados",
      "version": "1.0.0",
      "title": "API do Banco de Curriculos - JobNet",
      "license": {
        "name": "Apache 2.0",
        "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
      }
    },
    "host": "",
    "basePath": "/v1",
    "tags": [
      {
        "name": "cpf",
        "description": "Dados relativos ao cpf"
      },
      {
        "name": "save",
        "description": "Operação de salvar os dados"
      }
    ],
    "schemes": [
      "https",
      "http"
    ],
    "paths": {
      "/CPF": {
        "post": {
          "tags": [
            "cpf"
          ],
          "summary": "Verifica se o Cpf já está cadastrado",
          "description": "",
          "operationId": "cpf",
          "consumes": [
            "application/json"
          ],
          "produces": [
            "application/json"
          ],
          "parameters": [
            {
              "schema": {
                "$ref": "#/definitions/CPF"
              }
            }
          ],
          "responses": {
            "400": {
              "description": "Usuário já cadastrado"
            },
            "200": {
              "description": "Usuário disponível"
            }
          }
        }
      },
      "/Save": {
        "post": {
          "tags": [
            "save"
          ],
          "summary": "Salva os dados do formulário no banco de dados",
          "description": "",
          "operationId": "save",
          "consumes": [
            "application/json"
          ],
          "produces": [
            "application/json"
          ],
          "parameters": [{
              "in":"body",
              "name":"cpf",
              "description":"Cpf a ser verificado",
              "required":"true",
              "schema": {
                "$ref": "#/definitions/Save"
              }
            }
          ],
          "responses": {
            "500": {
              "description": "Dados não adequados"
            },
            "200":{
                "description": "Usuário Cadastrado"
            }
          }
        }
      }
    },
    "definitions": {
      "CPF": {
        "type": "object",
        "required": [
          "cpf"
        ],
        "properties": {
          "cpf": {
            "type": "integer",
            "format": "int64"
          }
        }
      },
      "Save":{
        "type": "object",
        "required": [
          "cpf",
          "nome",
          "nasc",
          "cep",
          "log",
          "bairro",
          "cidade",
          "estado",
          "email",
          "prof",
          "cel",
          "gênero"
        ],
        "properties":{
          "cpf":{
            "type":"integer",
            "example":"4223882902"
          },
          "nome":{
              "type":"string",
              "example":"Fulano de Tal"
          },
          "nasc":{
              "type":"date",
              "example":"01/01/2001"
          },
          "cep":{
              "type":"string",
              "example":"0100100"
          },
           "log":{
              "type":"string",
              "example":"Praça da Sé"
          },
          "endNum":{
              "type":"number",
              "example":"01"
          },
          "bairro":{
              "type":"string",
              "example":""
          },
          "cidade":{
              "type":"string",
              "example": "São Paulo"
          },
          "estado":{
              "type":"string",
              "example": "São Paulo"
          },
          "email":{
              "type":"string",
              "example": "meuemail@email.com"
          },
          "prof":{
              "type":"string",
              "example": "Carteiro"
          },
          "cel":{
              "type":"number",
              "example": "21999999999"
          },
          "tel":{
              "type":"number",
              "example": "25696969"
          },
          "genero":{
              "type":"string",
              "example":"Mulher Cis"
          },
          "rg":{
              "type":"number",
              "example": "249542239"
          },
          "cnh":{
              "type":"boolean",
              "example":"true",
              "description":"Possui Carteira de Motorista?"  
          },
          "temCarro":{
              "type":"boolean",
              "example":"true",
              "description":"Possui Carro?"
          },
          "viagem":{
              "type":"boolean",
              "example":"true",
              "description":"Possui disponibilidade para viajar?"
          }
      }
        
    }
}}

