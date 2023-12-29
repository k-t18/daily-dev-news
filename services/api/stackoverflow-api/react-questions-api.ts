import { API_CONFIG } from '@/services/config/api-config';
import axios from 'axios';

const GETListOfQuestions: any = async () => {
  const order: string = 'desc';
  const sort: string = 'votes';
  const tagged: string = 'reactjs';
  const site: string = 'stackoverflow';
  const pageSize: number = 50;

  function generateUniqueNumberForPageNumber() {
    // Get the current date
    const today = new Date();

    // Extract day, month, and year components
    const day = today.getDate();
    const month = today.getMonth() + 1; // Months are zero-based
    const year = today.getFullYear();

    // Combine date components to create a unique seed for today
    const uniqueSeed = `${year}${month < 10 ? '0' : ''}${month}${
      day < 10 ? '0' : ''
    }${day}`;

    // Convert the unique seed to a number
    let seedNumber = parseInt(uniqueSeed, 10);

    // Perform additional operations to keep the number within the desired range
    seedNumber = (seedNumber % 1000) + 1;

    return seedNumber;
  }

  // Example usage
  const uniqueNumber = generateUniqueNumberForPageNumber();

  await axios
    .get(
      `${API_CONFIG.base_url}/questions?order=${order}&sort=${sort}&tagged=${tagged}&site=${site}&page=${uniqueNumber}&pagesize=${pageSize}`
    )
    .then((res: any) => {
      console.log(res);
    })
    .catch((err: any) => {});
};
export default GETListOfQuestions;
