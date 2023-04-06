export default function destructuring({ special }) {
  const resArr = [];
  special.forEach((element) => {
    const {
      id, name, icon, description = 'Описание не доступно',
    } = element;
    resArr.push({
      id,
      name,
      icon,
      description,
    });
  });
  return resArr;
}
