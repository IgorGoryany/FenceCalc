import { total } from '../variables/variables';
export function printTotalDetailsList(
	totalFrame25,
	totalFrame20,
	totalPattern25,
	totalPattern20,
	totalPattern15
) {
	total.innerHTML = `
	<div class="total">
				<div class="karkas">
					<h3>КАРКАС</h3>
					<div class="total__frame">
						<div class="total__box">
							<h2 class="total__title">25&nbsp;X&nbsp;25</h2>
							${totalFrame25.map(el => `<div>${el[0]}&nbsp;X&nbsp;${el[1]}</div>`).join(' ')}
						</div>
						<div class="total__box">
							<h2 class="total__title">20&nbsp;X&nbsp;20</h2>
							${totalFrame20.map(el => `<div>${el[0]}&nbsp;X&nbsp${el[1]}</div>`).join(' ')}
						</div>
					</div>
				</div>
				<div class="pattern">
					<h3>РИСУНОК</h3>
					<div class="total__pattern">
						<div class="total__box">
							<h2 class="total__title">25&nbsp;X&nbsp;25</h2>
							${totalPattern25.map(el => `<div>${el[0]}&nbsp;X&nbsp${el[1]}</div>`).join(' ')}
						</div>
						<div class="total__box">
							<h2 class="total__title">20&nbsp;X&nbsp;20</h2>
							${totalPattern20.map(el => `<div>${el[0]}&nbsp;X&nbsp${el[1]}</div>`).join(' ')}
						</div>
						<div class="total__box">
							<h2 class="total__title">15&nbsp;X&nbsp;15</h2>
							${totalPattern15.map(el => `<div>${el[0]}&nbsp;X&nbsp${el[1]}</div>`).join(' ')}
						</div>
					</div>
				</div>
			</div>`;
}
