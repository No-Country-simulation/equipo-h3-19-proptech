import { useState } from "react";
import Swal from 'sweetalert2'

const calculadora = () => {

  const [loanAmount, setLoanAmount] = useState("");
  const [months, setMonths] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [paymentSchedule, setPaymentSchedule] = useState([]);

  const [cuota, setCuota] = useState(null);

  const calculateLoan = () => {
    const P = parseFloat(loanAmount); //p = monto del prestamo
    const r = 0.015; // r = taza de interes mensual
    const n = parseInt(months); //n = plazo en meses
    const c = parseInt(cuota);  //c = cuota fija

    /* if (!P || !r || !n) {
       alert("Por favor, ingresa todos los valores correctamente.");
       return;
     }
     */


    if (P && n) {
      // Fórmula para calcular la cuota mensual
      const monthlyRate = r;
      const monthlyQuota =
        (P * monthlyRate * Math.pow(1 + monthlyRate, n)) /
        (Math.pow(1 + monthlyRate, n) - 1);

      // Generar tabla de pagos
      const schedule = [];
      let remainingBalance = P;

      for (let i = 1; i <= n; i++) {
        const interestPayment = remainingBalance * monthlyRate;
        const principalPayment = monthlyQuota - interestPayment;
        remainingBalance -= principalPayment;

        schedule.push({
          month: i,
          principalPayment: principalPayment.toFixed(2),
          interestPayment: interestPayment.toFixed(2),
          remainingBalance: remainingBalance.toFixed(2),
        });
      }

      setMonthlyPayment(monthlyQuota.toFixed(2));
      setPaymentSchedule(schedule);

      const tableRows = schedule
        .map(
          (item) => `
      <tr  style="margin-bottom:6px;  border-solid:1px;" >
        <td>${item.month}</td>
        <td>${item.principalPayment}</td>
        <td>${item.interestPayment}</td>
        <td>${item.remainingBalance}</td>
      </tr>
    `
        )
        .join("");
      const htmlContent = `
    <p>Cuota mensual: <strong>${monthlyQuota.toFixed(2)}</strong></p>
    <table style="margin-top:20px; width: 100%; border-collapse: collapse; text-align: left; padding-top:10px;">
      <thead>
        <tr>
          <th>Mes</th>
          <th>Pago a Capital</th>
          <th>Pago a Intereses</th>
          <th>Saldo Restante</th>
        </tr>
      </thead>
      <tbody>
        ${tableRows}
      </tbody>
    </table>
  `;

      Swal.fire({
        title: "Simulacion de prestamo",
        html: htmlContent,
        confirmButtonText: "Aceptar",
        width: "60rem",
        // confirmButtonText: "Descargar simulacion",
        confirmButtonColor: "#64B742"
      });
    }
    else if (P && c) {

      const htmlContent = `
    <p>Cuota mensual: <strong> asdsa </strong></p>
    <table style="margin-top:20px; width: 100%; border-collapse: collapse; text-align: left; padding-top:10px;">
      <thead>
        <tr>
          <th>Mes</th>
          <th>Pago a Capital</th>
          <th>Pago a Intereses</th>
          <th>Saldo Restante</th>
        </tr>
      </thead>
      <tbody>
        hello
      </tbody>
    </table>
  `;

      Swal.fire({
        title: "Simulacion de prestamo por cuota fija",

        html: htmlContent,
        confirmButtonText: "Aceptar",
        width: "60rem",
        // confirmButtonText: "Descargar simulacion",
        confirmButtonColor: "#64B742"
      });
    }
  };

  return (
    <div className="border bg-gray-200 border-solid  w-96 rounded-md p-6">
      <div className="text-lg">Calcula tu rendimiento estimado</div>

      <div className="py-6 flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <div className="text-lg font-bold">Monto de inversion inicial</div>
          <div className="text-xs">
            ingresa el monto que querrias invertir y en que moneda
          </div>
          <div className="flex justify-center gap-2">
            <input
              className="w-3/4 h-8"
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              placeholder="Ej: 10000"
            />
            <select className="w-1/4 p-2 border text-[10px] h-8 ">
              <option value="option1">🇺🇸 USD</option>
              <option value="option2">co COP</option>
              <option value="option3">ar ARG</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="text-lg font-bold">Plazo de inversion</div>
          <div className="text-xs">
            ingresa el plazo en el que querrias invertir tu dinero
          </div>
          <div className="flex justify-center gap-2">
            <input
              className="w-3/4 h-8"
              value={months}
              onChange={(e) => setMonths(e.target.value)}
              placeholder="Ej: 24"
            />
            <select className="w-1/4 p-2 border text-[10px] h-8 ">
              <option value="option1">Anual</option>
              <option value="option2">Mensual</option>
              <option value="option3">Trimestral</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="text-lg font-bold">Cuota a pagar</div>
          <div className="text-xs">
            ingrese el dinero fijo que quieres pagar
          </div>
          <div className="flex justify-center gap-2">
            <input
              className="w-3/4 h-8"
              value={cuota}
              onChange={(e) => setCuota(e.target.value)}
              placeholder="2500"
            />
            <select className="w-1/4 p-2 border text-[10px] h-8 ">
              <option value="option1">Anual</option>
              <option value="option2">Mensual</option>
              <option value="option3">Trimestral</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="text-lg font-bold">Riesgo de inversion</div>
          <div className="text-xs">ingresa tu perfil de inversor</div>
          <div className="flex justify-center gap-2">
            <select className="w-full p-2 border text-base  ">
              <option value="option1">Alta</option>
              <option value="option2">Leve</option>
              <option value="option3">Sin riesgo</option>
            </select>
          </div>
        </div>

        <div className="flex gap-1 justify-center">
          <div
            className="bg-colorFourth text-colorPrimary font-semibold px-3 py-2 cursor-pointer rounded-md w-64 justify-center flex"
            onClick={calculateLoan}
          >
            REALIZAR SIMULACION
          </div>
        </div>
      </div>
    </div>
  );
};

export default calculadora;
