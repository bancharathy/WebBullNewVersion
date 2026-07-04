import { useEffect, useState } from 'react'
import './App.css'

const features = [
  {
    id: 'report',
    title: 'រាយការណ៍តាមអ៊ីនធឺណិត',
    description: 'បំពេញទម្រង់ខ្លីខាងក្រោម។ គឺសុវត្ថិភាពដោយស្វ័យប្រវត្តិ — បញ្ចូលឈ្មោះតែបើអ្នកចង់តាមដានបន្ត។',
    action: 'ទៅកាន់ទម្រង់ ↓',
  },
  {
    id: 'protect',
    title: 'ប្រាប់មនុស្សពេញវ័យដែលទុកចិត្តបាន',
    description: 'អ្នកប្រឹក្សា គ្រូបង្រៀន ឬសមាជិកគ្រួសារ អាចធ្វើសកម្មភាពភ្លាមៗ និងនៅជាមួយអ្នកក្នុងអំឡុងដំណើរការ។',
    action: 'មើលថាត្រូវទាក់ទងនរណា',
  },
  {
    id: 'resources',
    title: 'ទូរស័ព្ទឬសរសេរទៅកាន់ខ្សែជំនួយ',
    description: 'ប្រសិនបើអ្នកចង់និយាយជាមួយនរណាម្នាក់ក្រៅសាលា អ្នកប្រឹក្សាដែលបានបណ្តុះបណ្តាលអាចទៅដល់បានគ្រប់ពេល។',
    action: 'មើលខ្សែទំនាក់ទំនង',
  },
]

const tips = [
  {
    tag: 'ពិតប្រាកដ',
    title: 'រក្សាសុវត្ថិភាពជារៀងរាល់ថ្ងៃ',
    points: [
      'នៅជិតមិត្ត ឬគ្រូនៅពេលនិងកន្លែងដែលវាធម្មតាកើតឡើង — ការរំលោភរបស់កុមារអាចកើតឡើងតិចជាងនៅពេលមានមនុស្សនៅជុំវិញ។',
      'វាអាចទៅចេញដោយមិនឆ្លើយតប។ ដើរចេញមិនមែនជាការបាត់បង់។',
      'ទំនាក់ទំនងជាមួយមិត្តម្នាក់ ដើម្បីជូនដំណឹងពេលណាដែលត្រូវជួយ ឬទាក់ទងមនុស្សពេញវ័យ។',
    ],
  },
  {
    tag: 'អ៊ីនធឺណិត',
    title: 'ការពារខ្លួនឯងតាមដ지털',
    points: [
      'កំណត់ប្រវត្តិរូបឲ្យឯកជន ហើយដកអ្នកដែលធ្វើឲ្យអ្នកមិនសុខដុម — អ្នកមិនត្រូវគេបង្ខំឲ្យផ្តល់ការចូលប្រើ។',
      'រារាំង និងបិទសំលេងជំនួសឲ្យការឆ្លើយតប។ ការចូលរួមជាញឹកញាប់អាចធ្វើឲ្យបញ្ហាឡើងកម្រិត។',
      'កុំលុបសារទាំងនោះ — ថតអេក្រង់ជាមុន ទោះជាសារដែលធ្វើឲ្យរអ៊ូរទុក្ខក៏ដោយ។ វាជាភស្តុតាង។',
    ],
  },
  {
    tag: 'កំណត់ត្រា',
    title: 'រក្សាទុកឯកសារដោយល្អ',
    points: [
      'ចូរចាប់តាំងពីវាកើតឡើង សរសេរថ្ងៃ ខែ ម៉ោង កន្លែង និងអ្វីដែលបាននិយាយ ឬធ្វើ។',
      'រក្សារូបថតអេក្រង់ទៅក្នុងថតដែលអ្នកតែប៉ុណ្ណោះអាចចូលប្រើ។',
      'ចូរកត់សម្គាល់ភ្នាក់ងារឬមនុស្សដែលឃើញឬដឹងពីព្រឹត្តិការណ៍។',
    ],
  },
  {
    tag: 'សុខភាពចិត្ត',
    title: 'ចំពោះអារម្មណ៍របស់អ្នក',
    points: [
      'អ្វីដែលកើតឡើងចំពោះអ្នកមិនមែនជារឿងដែលអ្នកបង្កើតឬសមនោះទេ។',
      'វាជារឿងធម្មតាដែលអាចមានអារម្មណ៍ខឹង ឈឺចាប់ ឬដាច់សរសៃ — ទាំងនេះល្អ។',
      'និយាយជាមួយនរណាម្នាក់ដែលអ្នកទុកចិត្តអំពីរបៀបដែលវាអនុញ្ញាតមកដល់អ្នក។',
    ],
  },
]

const resources = [
  { eyebrow: 'សាលា', title: 'អ្នកប្រឹក្សាសាលា', description: 'គាំទ្រដោយសម្ងាត់ និងផ្ទាល់ខ្លួនក្នុងម៉ោងសាលា។', detail: '[បន្ថែមឈ្មោះ និងលេខបន្ទប់]' },
  { eyebrow: 'សាលា', title: 'គណៈកម្មការប្រឆាំងការល្មើស', description: 'គ្រប់គ្រងការស៊ើបអង្កេត និងតាមដានបន្ត។', detail: '[បន្ថែមព័ត៌មានទំនាក់ទំនង]' },
  { eyebrow: 'ខ្សែជំនួយ', title: 'ខ្សែជំនួយជាតិ / ក្នុងតំបន់', description: 'ឥតគិតថ្លៃ សម្ងាត់ និងមាននៅក្រៅម៉ោងសាលា។', detail: '[បន្ថែមលេខខ្សែជំនួយ]' },
  { eyebrow: 'សង្គ្រោះ', title: 'គ្រោះថ្នាក់ទាន់ពេល', description: 'ប្រសិនបើអ្នក ឬនរណាម្នាក់ស្ថិតក្នុងគ្រោះថ្នាក់ឥឡូវនេះ។', detail: '[បន្ថែមលេខសង្គ្រោះ]' },
]

const faqs = [
  {
    question: 'តើឪពុកម្តាយរបស់ខ្ញុំនឹងត្រូវបានប្រាប់ដោយស្វ័យប្រវត្តិទេ?',
    answer: 'មិនដោយស្វ័យប្រវត្តិទេ។ បុគ្គលិកនឹងធ្វើការជាមួយអ្នកជាមុនអំពីនរណាត្រូវដឹង និងពេលណា — លើកលែងតែមានសុវត្ថិភាពដែលតម្រូវឲ្យទាក់ទងឪពុកម្តាយភ្លាមៗ។',
  },
  {
    question: 'តើខ្ញុំអាចនៅស្ងាត់បានពិតមែនទេ?',
    answer: 'បាន។ បន្ទះបិទឈ្មោះត្រូវបានបើកជាស្វ័យប្រវត្តិ។ ប្រសិនបើអ្នកទុកវាចោល កុមារមិនត្រូវបានភ្ជាប់ទៅក្នុងរបាយការណ៍។',
  },
  {
    question: 'តើបើខ្ញុំមិនប្រាកដថាវាជាការល្មើស?',
    answer: 'ក៏អាចរាយការណ៍បាន។ អ្នកមិនចាំបាច់ដាក់ស្លាកឲ្យបានត្រឹមត្រូវ — ប្រសិនបើវាធ្វើឲ្យអ្នកមានអារម្មណ៍មិនសុវត្ថិភាព ឬត្រូវបានគំរាមទ្រ វាគួរតែប្រាប់នរណាម្នាក់។',
  },
  {
    question: 'តើមានអ្វីកើតឡើងបន្ទាប់ពីខ្ញុំដាក់សំណើរ?',
    answer: 'បុគ្គលិកម្នាក់ពិនិត្យវា ជាធម្មតាក្នុងមួយថ្ងៃសាលា ហើយសម្រេចចិត្តពីជំហានបន្ថែម — ដែលអាចរួមមានការត្រួតពិនិត្យជាមួយអ្នកជាមុន។',
  },
]

function createReferenceCode() {
  return `REF-${Math.floor(1000 + Math.random() * 9000)}`
}

function App() {
  const [anonymous, setAnonymous] = useState(true)
  const [submitted, setSubmitted] = useState(false)
  const [referenceCode, setReferenceCode] = useState('REF-0000')
  const [formData, setFormData] = useState({
    name: '',
    grade: '',
    description: '',
    location: 'ក្នុងថ្នាក់',
    urgency: 'វាកំពុងបន្ត ខ្ញុំចង់ឲ្យវាបញ្ឈប់',
  })

  useEffect(() => {
    const quickExit = () => {
      window.location.replace('https://www.google.com')
    }

    let escCount = 0
    let escTimer

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        escCount += 1
        clearTimeout(escTimer)
        escTimer = setTimeout(() => {
          escCount = 0
        }, 1000)

        if (escCount >= 3) {
          quickExit()
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)

    const sections = document.querySelectorAll('main section, footer')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal', 'visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18 },
    )

    sections.forEach((section) => {
      section.classList.add('reveal')
      observer.observe(section)
    })

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      observer.disconnect()
      clearTimeout(escTimer)
    }
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    setReferenceCode(createReferenceCode())
    setSubmitted(true)
    window.requestAnimationFrame(() => {
      document.getElementById('confirmPanel')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    })
  }

  const handleReset = () => {
    setSubmitted(false)
    setAnonymous(true)
    setFormData({
      name: '',
      grade: '',
      description: '',
      location: 'ក្នុងថ្នាក់',
      urgency: 'វាកំពុងបន្ត ខ្ញុំចង់ឲ្យវាបញ្ឈប់',
    })
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  return (
    <div className="app-shell">
      <div className="exitbar">
        <span>⎋ អ្នកអាចចាកចេញពីទំព័រនេះភ្លាមៗ ហើយវាគ្មាននៅក្នុងប្រវត្តិរុករករបស់អ្នក។</span>
        <button type="button" className="btn btn-exit" onClick={() => window.location.replace('https://www.google.com')}>
          ចាកចេញឆាប់
        </button>
      </div>

      <header className="site-header">
        <div className="nav-wrap">
          <a href="#top" className="logo">
            <span className="logo-mark" aria-hidden="true" />
            Haven
          </a>
          <nav className="site-nav" aria-label="Primary">
            <ul>
              <li><a href="#report">រាយការណ៍</a></li>
              <li><a href="#protect">ការពារខ្លួន</a></li>
              <li><a href="#resources">ទំនាក់ទំនងដែលទុកចិត្ត</a></li>
              <li><a href="#faq">សំណួរ</a></li>
            </ul>
          </nav>
          <div className="nav-cta">
            <a href="#report" className="btn btn-primary">រាយការណ៍ឥឡូវនេះ</a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <span className="eyebrow">សម្រាប់សិស្ស ដោយមនុស្សដែលគាំទ្រអ្នក</span>
              <h1>អ្នកមិននៅលីវទេ។ នេះជាកន្លែងសុវត្ថិភាពសម្រាប់និយាយចេញ។</h1>
              <p className="lede">
                ថ whether it happened once or has been going on for weeks — online, in the hallway, or in a group chat — telling someone is the first step to making it stop.
              </p>
              <div className="hero-actions">
                <a href="#report" className="btn btn-primary">រាយការណ៍ការល្មើស</a>
                <a href="#resources" className="btn btn-secondary">និយាយជាមួយនរណាម្នាក់ឥឡូវនេះ</a>
              </div>
              <div className="reassure">
                <span>🛡</span>
                <span>ចាកចេញពីទំព័រនេះ៖ ចុច “ចាកចេញឆាប់” ពេលណាក៏បាន ឬចុច Esc បីដងឆាប់ — អ្នកនឹងត្រូវបានផ្លាស់ទៅទំព័រផ្សេងភ្លាមៗ។</span>
              </div>
            </div>

            <div className="hero-card">
              <h3>មុនពេលអ្នករាយការណ៍ សូមដឹងអំពីរឿងទាំងនេះ</h3>
              <ul>
                <li>វាមិនដែលជាកំហុសរបស់អ្នកទេ។ ការរាយការណ៍មិនមែនជាការគិតតែ “បราย” — វាជាការស្នើសុំជំនួយ។</li>
                <li>អ្នកអាចនៅស្ងាត់ស្និទ្ធបាន។ គ្មានឈ្មោះ ឬការចូលប្រើដែលត្រូវការ។</li>
                <li>មនុស្សពេញវ័យពិតប្រាកដអានរាយការណ៍ទាំងអស់ — មិនមែនរ៉ូបូត ឬមូលដ្ឋានទិន្នន័យ។</li>
                <li>អ្នកអាចឈប់ ធ្វើសំណួរនៅចុងបញ្ចប់ ឬត្រឡប់មកវិញនៅពេលណាមួយ។</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="options" id="options">
          <div className="wrap">
            <div className="options-head">
              <span className="eyebrow">ជ្រើសរើសអ្វីដែលដូចជាត្រឹមត្រូវ</span>
              <h2>មានវិធីជាច្រើនក្នុងការប្រាប់នរណាម្នាក់</h2>
              <p>ខ្លះចូលចិត្តវាយអក្សរយ៉ាងឯកជន។ ខ្លះចង់និយាយមុខមាត់។ ទាំងពីរមានសេចក្តីត្រឹមត្រូវ — ប្រើតាមដែលធ្វើអោយអ្នកត្រូវបាន heard ។</p>
            </div>
            <div className="option-grid">
              {features.map((feature) => (
                <article key={feature.id} className="option-card">
                  <div className="option-icon">✎</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <a href={`#${feature.id}`} className="btn btn-ghost">{feature.action}</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="report-section" id="report">
          <div className="wrap report-shell">
            <div className="report-side">
              <span className="eyebrow">រាយការណ៍វា</span>
              <h2>ប្រាប់យើងអំពីអ្វីដែលកើតឡើង</h2>
              <p>ចែករំលែកអស់ដែលធូរស្បើយ ឬតិចប៉ុណ្ណា។ វាលទាំងអស់ក្រៅពីការពិពណ៌នាខ្លីគឺជារើសបាន។</p>
              <ul className="trust-points">
                <li><span className="dot" />តែក្រុមប្រឹក្សាសាលារបស់អ្នកប៉ុណ្ណោះអាចមើលឃើញវា — វាមិនត្រូវបានបង្ហោះ ឬចែករំលែកជាមួយមិត្តរួមថ្នាក់។</li>
                <li><span className="dot" />អ្នកនឹងទទួលបានលេខកូដសំគាល់ ដើម្បីអាចពិនិត្យវាផ្សេងពេលក្រោយដោយមិនឲ្យឈ្មោះ។</li>
                <li><span className="dot" />ប្រសិនបើអ្នករាយការណ៍អំពីគ្រោះថ្នាក់ភ្លាមៗ មនុស្សពេញវ័យដែលទុកចិត្តបាននឹងទាក់ទងអ្នកក្នុងថ្ងៃនោះ។</li>
              </ul>
            </div>

            <div>
              <form className={`card ${submitted ? 'is-hidden' : ''}`} onSubmit={handleSubmit}>
                <div className="anon-toggle">
                  <p>រាយការណ៍ដោយស្ងាត់<br /><span>ឈ្មោះអ្នកនឹងមិនបង្ហាញនៅក្នុងរាយការណ៍ទេ</span></p>
                  <label className="switch">
                    <input type="checkbox" checked={anonymous} onChange={(event) => setAnonymous(event.target.checked)} />
                    <span className="slider" />
                  </label>
                </div>

                {!anonymous && (
                  <div id="nameFields">
                    <div className="row-2">
                      <div className="field">
                        <label htmlFor="name">ឈ្មោះរបស់អ្នក</label>
                        <input id="name" name="name" type="text" placeholder="ជាជម្រើស" value={formData.name} onChange={handleChange} />
                      </div>
                      <div className="field">
                        <label htmlFor="grade">ថ្នាក់ / ឆ្នាំ</label>
                        <input id="grade" name="grade" type="text" placeholder="ជាជម្រើស" value={formData.grade} onChange={handleChange} />
                      </div>
                    </div>
                  </div>
                )}

                <div className="field">
                  <label htmlFor="description">មានអ្វីកើតឡើង? *</label>
                  <textarea id="description" name="description" required placeholder="ពិពណ៌នាអំពីអ្វីកើតឡើង តាមដែលអ្នកចាំបាន។" value={formData.description} onChange={handleChange} />
                  <div className="hint">រួមបញ្ចូលថ្ងៃ ខែ កន្លែង ឬឈ្មោះអ្នកប្រើប្រសិនបើអ្នកដឹង — វាអាចជួយបាន ប៉ុន្តែមិនចាំបាច់។</div>
                </div>

                <div className="row-2">
                  <div className="field">
                    <label htmlFor="location">វាកើតឡើងនៅណា?</label>
                    <select id="location" name="location" value={formData.location} onChange={handleChange}>
                      <option>ក្នុងថ្នាក់</option>
                      <option>បន្ទប់ដើរ / តំបន់ទំនាក់ទំនង</option>
                      <option>សាលាអាហារ</option>
                      <option>កីឡា / សកម្មភាពក្រោយសាលា</option>
                      <option>លើអ៊ីនធឺណិត / ប្រព័ន្ធសង្គម</option>
                      <option>ក្រុមជជែក ឬកម្មវិធីផ្ញើសារ</option>
                      <option>កន្លែងផ្សេងទៀត</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="urgency">អ្នកមានអារម្មណ៍ថាវាបន្ទាន់ប៉ុណ្ណា?</label>
                    <select id="urgency" name="urgency" value={formData.urgency} onChange={handleChange}>
                      <option>វាកំពុងបន្ត ខ្ញុំចង់ឲ្យវាបញ្ឈប់</option>
                      <option>វាកើតឡើងម្តង</option>
                      <option>ខ្ញុំភ័យសុវត្ថិភាពរបស់ខ្ញុំឥឡូវនេះ</option>
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label>ភស្តុតាង (ជាជម្រើស)</label>
                  <div className="upload-box">រូបថតអេក្រង់ សារ ឬរូបថត — ចុចដើម្បីអាប់ឡូត ឬទម្លាក់ឯកសារនៅទីនេះ</div>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>ដាក់សំណើរ</button>
              </form>

              <div className={`card confirm ${submitted ? 'show' : ''}`} id="confirmPanel" aria-live="polite">
                <div className="confirm-icon">✓</div>
                <h3>រាយការណ៍របស់អ្នកត្រូវបានទទួល</h3>
                <p>បុគ្គលិកដែលទុកចិត្តបាននឹងអានវា ហើយធ្វើតាមបន្ទាប់ក្នុងវិធីដែលរក្សាសុវត្ថិភាពរបស់អ្នក។</p>
                <div className="ref">{referenceCode}</div>
                <p>រក្សាទុកកូដនេះ — អ្នកអាចប្រើវាដើម្បីពិនិត្យរាយការណ៍របស់អ្នក ឬបន្ថែមព័ត៌មានក្រោយ។</p>
                <button type="button" className="btn btn-secondary" onClick={handleReset}>ដាក់សំណើរមួយទៀត</button>
              </div>
            </div>
          </div>
        </section>

        <section className="protect" id="protect">
          <div className="wrap">
            <div className="protect-head">
              <span className="eyebrow">នៅពេលដែលរឿងទាំងនេះត្រូវបានដោះស្រាយ</span>
              <h2>វិធីការពារខ្លួនជាថ្មី ចាប់ពីថ្ងៃនេះ</h2>
              <p>ការរាយការណ៍ចាប់ផ្តើមដំណើរការ — នេះជាអ្វីដែលអ្នកអាចធ្វើបានឥឡូវនេះ ដោយខ្លួនឯង ដើម្បីមានអារម្មណ៍សុវត្ថិភាព។</p>
            </div>

            <div className="protect-grid">
              {tips.map((tip) => (
                <details key={tip.title} className="tip" open={tip.title === 'រក្សាសុវត្ថិភាពជារៀងរាល់ថ្ងៃ'}>
                  <summary>
                    <span className="tag">{tip.tag}</span>
                    {tip.title}
                    <span className="chev">+</span>
                  </summary>
                  <div className="tip-body">
                    <ul>
                      {tip.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="resources">
          <div className="wrap">
            <span className="eyebrow">មនុស្សដែលអ្នកអាចទៅរក</span>
            <h2>អ្នកទំនាក់ទំនងដែលទុកចិត្តបាន</h2>
            <p className="wrap-narrow">បន្ថែមទំនាក់ទំនងពិតនៃសាលារបស់អ្នកនៅទីនេះ។ មនុស្សណាមួយក្នុងចំណោមនេះអាចជួយបាន មិនថាអ្នកបានដាក់សំណើរតាមអ៊ីនធឺណិត ឬមិនបានដាក់សំណើរទេ។</p>

            <div className="resources-grid" style={{ marginTop: '2em' }}>
              {resources.map((resource) => (
                <div key={resource.title} className="res-card">
                  <span className="eyebrow">{resource.eyebrow}</span>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <div className="num">{resource.detail}</div>
                </div>
              ))}
            </div>

            <div className="emergency-note">
              ប្រសិនបើអ្នកស្ថិតនៅក្នុងគ្រោះថ្នាក់ភ្លាមៗ ឬគិតពីការខូចខាតខ្លួន សូមទាក់ទងសេវាអាសន្នក្នុងតំបន់ ឬខ្សែទំនាក់ទំនងវិនាតដោយឆាប់។ ទំព័រនេះគ្រាន់តែជាចំណុចចាប់ផ្តើម — មិនមែនជំនួសសម្រាប់ជំនួយបន្ទាន់នៅម្ខាងផ្ទាល់ទេ។
            </div>
          </div>
        </section>

        <section className="faq" id="faq">
          <div className="wrap wrap-narrow">
            <span className="eyebrow">សំណួរដែលជាញឹកញាប់</span>
            <h2>មុនពេលអ្នករាយការណ៍</h2>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question} className="faq-item">
                  <summary>{faq.question}<span className="chev">+</span></summary>
                  <div className="faq-body">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-wrap">
          <div className="footer-brand">
            <h3>Haven</h3>
            <p>ជាកន្លែងស្ងាត់ សុវត្ថិភាពនៃតំបន់សាលាសម្រាប់សិស្សក្នុងការរាយការណ៍ការល្មើស និងស្វែងរកគាំទ្រ — សាងសង់ជាមួយសុវត្ថិភាព និងភាពឯកជនរបស់អ្នកជាមុន។</p>
          </div>
          <div className="footer-cols">
            <div>
              <h3>តំបន់</h3>
              <ul>
                <li><a href="#report">រាយការណ៍ការល្មើស</a></li>
                <li><a href="#protect">ការពារខ្លួន</a></li>
                <li><a href="#resources">អ្នកទំនាក់ទំនងដែលទុកចិត្ត</a></li>
              </ul>
            </div>
            <div>
              <h3>ចាកចេញដោយសុវត្ថិភាព</h3>
              <ul>
                <li>
                  <button type="button" className="btn btn-ghost footer-exit" onClick={() => window.location.replace('https://www.google.com')}>
                    ចាកចេញឆាប់ ⎋
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>ទំព័រនេះមិនតាមដាន ឬរក្សាទុកសកម្មភាពរុករករបស់អ្នកទេ។</span>
          <span>គំរូ — ជំនួសព័ត៌មានទំនាក់ទំនងជំនួសដោយព័ត៌មានពិតនៃសាលារបស់អ្នក។</span>
        </div>
      </footer>
    </div>
  )
}

export default App
