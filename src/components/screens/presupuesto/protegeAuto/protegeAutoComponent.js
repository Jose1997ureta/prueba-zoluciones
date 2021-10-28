import Image1 from "../../../../images/bg3.svg";
import Image2 from "../../../../images/bg4.svg";
import Image3 from "../../../../images/bg5.svg";

import { AcordeonComponent } from "./acordeon/acordeon";

export const ProtegeAutoComponent = () => {
	return (
		<>
			<AcordeonComponent
				activeC={true}
				activeT={true}
				title="Choque y/o pasarte la luz roja "
				text="He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más"
				image={Image1}
			/>
			<AcordeonComponent
				activeC={false}
				activeT={false}
				title="Llanta robada"
				text="He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más"
				image={Image2}
			/>
			<AcordeonComponent
				activeC={false}
				activeT={false}
				title="Atropello en la vía Evitamiento "
				text="He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más"
				image={Image3}
			/>
		</>
	);
};
