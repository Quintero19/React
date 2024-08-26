const jsonData=`
[
    {
        "nombre": "Ana",
        "puesto": "Desarrolladora",
        "salario": 50000
    },
    {
        "nombre": "Luis",
        "puesto": "Diseñador",
        "salario": 40000
    },
    {
        "nombre": "María",
        "puesto": "Gerente",
        "salario": 60000
    }
]
`;

const empleados = JSON.parse(jsonData);

const totalsalarios=empleados.reduce((total,empleados)=>total +empleados.salario,0 ) 
const salariopromedio=totalsalarios/empleados.length;

console.log(`El salario promedio de los empleados es: ${salariopromedio}`);
