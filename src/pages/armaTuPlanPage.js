import { HeaderComponent } from "../components/layout/headerComponent";
import { MontoComponent } from "../components/screens/monto/montoComponent";
import { PresupuestoComponent } from "../components/screens/presupuesto/presupuestoComponent";
import { TimeLineComponent } from "../components/screens/timeLine/timeLineComponent";

import "../styles/armaPlan.scss";

export const ArmaTuPlanPage = () => {
	return (
		<>
			<HeaderComponent />
			<div className="plan__container">
				<div className="plan">
					<TimeLineComponent />
					<PresupuestoComponent />
					<MontoComponent />
				</div>
			</div>
		</>
	);
};
