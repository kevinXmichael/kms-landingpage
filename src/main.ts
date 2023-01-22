import 'virtual:windi.css'
import './styles.scss'

const copyrightYear = document.getElementById('copyright-year')
if (copyrightYear) {
	copyrightYear.innerText = `© ${new Date().getFullYear()} Kevin Michael Schott (kms695)`
}

const imprintGDPRClickableArea = document.getElementById('imprint-gdpr-clickable-area')
if (imprintGDPRClickableArea) {
	imprintGDPRClickableArea.addEventListener('click', () => {
		const imprintGDPR = document.getElementById('imprint-gdpr')
		if (imprintGDPR) {
			imprintGDPR.className = 'text-justify my-xl' // Override 'hidden' class
		}
	})
}

const hacker = '%cHey hacker 🔥'
console.info(hacker, 'color: red; font-size: medium')
// https://patorjk.com/software/taag/#p=display&f=Small&t=kms695
const kms695_ = String.raw`
  _              __ ___ ___ 
 | |___ __  ___ / // _ \ __|
 | / / '  \(_-</ _ \_, /__ \
 |_\_\_|_|_/__/\___//_/|___/
`
console.info(`%c${kms695_}`, `color: #feef37; font-size: medium`)
const kms695 = document.createComment(kms695_)
document.prepend(kms695)
