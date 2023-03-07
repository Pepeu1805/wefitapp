import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { Repository } from '../../../@types/repository';

export async function addRepositoryStorage(newData: Repository) {
  const check = await checkRepositoryStorage(newData.node_id)

  if (check) {
    return
  }

  const { getItem, setItem } = useAsyncStorage("@wefitapp:repositorys");

  try {
    const response = await getItem();
    const previousData = response ? JSON.parse(response) : [];
    const data = [...previousData, newData];

    await setItem(JSON.stringify(data));

  } catch (error) {
  }
}

export async function removeRepositoryStorage(id: string) {

  const { getItem, setItem } = useAsyncStorage("@wefitapp:repositorys");
  const response = await getItem();
  const previousData = response ? JSON.parse(response) : [];
  const data = previousData.filter((item: Repository) => item.node_id !== id);
  setItem(JSON.stringify(data));

}

export async function checkRepositoryStorage(id: string) {

  const { getItem } = useAsyncStorage("@wefitapp:repositorys");
  const response = await getItem();
  const previousData = response ? JSON.parse(response) : [];
  const data = previousData.find((repo: Repository) => repo.node_id === id)

  return data === undefined ? false : true
}