import neo4j from 'neo4j-driver';
import dotenv from 'dotenv';

dotenv.config();

const URI = 'bolt://neo4j:7687';
const USER = 'neo4j';
const PASSWORD = process.env.NEO4J_PASSWORD ?? 'R7XHz0r8WDO6EoUF1xBn';

// Função para criar e retornar a instância do driver do Neo4j
export async function getDriver() {
  try {
    const driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASSWORD));
    const session = driver.session();
    const serverInfo = await session.run('CALL dbms.components()');
    console.log('Connection established');
    console.log(serverInfo);
    return driver;
  } catch (err) {
    console.error(`Connection error:\n${err}`);
    throw err;
  }
}