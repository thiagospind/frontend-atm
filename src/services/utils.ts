import moment from 'moment';

export const convertUnixTimestampToDate = (timestamp: number) => {
  try {
    console.log(timestamp);
    return moment.unix(timestamp/1000).format('DD/MM/YYYY');
  } catch (error) {
    return null;
  }
}

export const formatCurrency = (value: number | undefined): string | null => {
  if (!value) {
    return null;
  }
  return `R$${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
}