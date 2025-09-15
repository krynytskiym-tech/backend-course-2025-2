const date = "20230201"; 
const time_period = "m";
const nbuUrl = new URL("https://bank.gov.ua/");
nbuUrl.pathname = "/NBUStatService/v1/statdirectory/inflation";

nbuUrl.searchParams.append("date", date);
nbuUrl.searchParams.append("period", time_period);
nbuUrl.searchParams.append("json", "");

console.log("Сконструйований URL:");
console.log(nbuUrl.toString());
console.log("\nПараметри запиту:");
console.log("Дата:", date);
console.log("Період:", time_period);
console.log("Формат:", "JSON");
console.log("\nКомпоненти URL:");
console.log("Протокол:", nbuUrl.protocol);
console.log("Хост:", nbuUrl.host);
console.log("Шлях:", nbuUrl.pathname);
console.log("Параметри:", nbuUrl.search);
