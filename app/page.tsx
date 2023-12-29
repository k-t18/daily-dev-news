import { API_CONFIG } from '@/services/config/api-config';
import { FC } from 'react';

const GETListOfQuestions: any = async () => {
  const apiKey = process.env.API_STACK_EXCHANGE_SECRET_KEY;
  const order: string = 'desc';
  const sort: string = 'votes';
  const tagged: string = 'reactjs';
  const site: string = 'stackoverflow';
  const pageSize: number = 50;

  function generateUniqueNumberForPageNumber() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const uniqueSeed = `${year}${month < 10 ? '0' : ''}${month}${
      day < 10 ? '0' : ''
    }${day}`;
    let seedNumber = parseInt(uniqueSeed, 10);
    seedNumber = (seedNumber % 1000) + 1;

    return seedNumber;
  }

  // Example usage
  const uniqueNumber = generateUniqueNumberForPageNumber();

  const api_data = fetch(
    `${API_CONFIG.base_url}/questions?order=${order}&sort=${sort}&tagged=${tagged}&site=${site}&page=${uniqueNumber}&pagesize=${pageSize}&key=${apiKey}`
  )
    .then((response) => console.log(response))
    // .then((data) => console.log(data))
    .catch((err) => console.error(err));
};

const Page: FC = async () => {
  const data = await GETListOfQuestions();
  console.log('data', data);
  return <div>test</div>;
};
export default Page;
