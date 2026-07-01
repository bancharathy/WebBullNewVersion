import './App.css'

const features = [
  {
    id: 'report',
    title: 'រាយការណ៍អំពីការរំលោភបំពាននៅក្នុងសាលា',
    description: 'ចែករំលែកអ្វីដែលបានកើតឡើងតាមរបៀបសុវត្ថិភាព និងជិតស្និទ្ធ។',
    action: 'បើក',
  },
  {
    id: 'help',
    title: 'ទទួលជំនួយ',
    description: 'រកមើលជំហានសាមញ្ញដើម្បីការពារខ្លួនអ្នក និងស្នើសុំជំនួយ។',
    action: 'បើក',
  },
  {
    id: 'learn',
    title: 'រៀនអំពីការរំលោភបំពាននៅក្នុងសាលា',
    description: 'ជួយយល់ពីរបៀបដែលការរំលោភបំពានកើតឡើង និងរបៀបការពារវា។',
    action: 'បើក',
  },
  {
    id: 'contact',
    title: 'ទាក់ទងគ្រូ',
    description: 'ផ្ញើសារទៅគ្រូ ឬអ្នកផ្តល់ប្រឹក្សាដើម្បីទទួលការណែនាំ។',
    action: 'បើក',
  },
]

function App() {
  return (
    <div className="app-shell">
      <header className="hero">
        <div>
          <p className="badge">SafeTalk</p>
          <h1>និយាយអំពីការរំលោភបំពាននៅក្នុងសាលា។</h1>
          <p>
            SafeTalk ជួយឲ្យសិស្សរាយការណ៍អំពីការរំលោភបំពាននៅក្នុងសាលាដោយអនាមិក
            ក៏ដូចជាទទួលបានការណែនាំ ទាក់ទងគ្រូ ឬក្រុមប្រឹក្សា និងរៀនអំពីការបង្ការការរំលោភបំពាននៅក្នុងសាលា។
          </p>
          <div className="hero-actions">
            <a href="#report" className="btn btn-primary">
              រាយការណ៍អំពីការរំលោភបំពាន
            </a>
            <a href="#help" className="btn btn-secondary">
              ទទួលជំនួយ
            </a>
          </div>
        </div>

        <div className="hero-card">
          <h3>កម្មវិធីនេះធ្វើงานយ៉ាងដូចម្តេច</h3>
          <p>
            សិស្សអាចជ្រើសរើសពីជម្រើសសំខាន់ ៤ រូបមន្ត៖ រាយការណ៍អំពីការរំលោភបំពាននៅក្នុងសាលា
            ទទួលជំនួយ រៀនអំពីការបង្ការការរំលោភបំពាននៅក្នុងសាលា ឬទាក់ទងមនុស្សពេញចិត្ត។
          </p>
          <ul className="check-list">
            <li>រាយការណ៍ដោយអនាមិកសម្រាប់សុវត្ថិភាព</li>
            <li>ការណែនាំរហ័ស និងគន្លឹះជំនួយ</li>
            <li>ទំនាក់ទំនងងាយស្រួលជាមួយបុគ្គលិកសាលា</li>
          </ul>
        </div>
      </header>

      <section className="features">
        {features.map((feature) => (
          <article key={feature.id} className="feature-card" data-target={feature.id}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <button className="btn btn-secondary" type="button">
              {feature.action}
            </button>
          </article>
        ))}
      </section>

      <section className="panel" id="report">
        <h2>រាយការណ៍អំពីការរំលោភបំពាននៅក្នុងសាលា</h2>
        <form>
          <label htmlFor="summary">អ្វីបានកើតឡើង?</label>
          <textarea id="summary" name="summary" placeholder="ពិពណ៌នាអំពីស្ថានភាពដោយសង្ខេប..." />

          <label htmlFor="place">វាកើតឡើងនៅឯណា?</label>
          <input id="place" name="place" type="text" placeholder="ថ្នាក់រៀន ជាន់ផ្លូវ បន្ទប់ឡាន ឬអនឡាញ..." />

          <label htmlFor="severity">វាមានសារៈសំខាន់ប៉ុណ្ណា?</label>
          <select id="severity" name="severity">
            <option>តិច</option>
            <option>មធ្យម</option>
            <option>ធ្ងន់ធ្ងរ</option>
          </select>

          <button className="btn btn-primary" type="submit">
            ដាក់ស្នើរាយការណ៍
          </button>
        </form>
      </section>

      <section className="panel" id="help">
        <h2>ទទួលជំនួយ</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <h3>រក្សាសុវត្ថិភាព</h3>
            <p>ទៅកន្លែងដែលមនុស្សពេញចិត្តអាចមើលឃើញអ្នក និងកាន់ទូរស័ព្ទនៅជាប់ខាងអ្នក។</p>
          </div>
          <div className="tip-card">
            <h3>ប្រាប់អ្នកដទៃ</h3>
            <p>ចែករំលែកបទពិសោធន៍របស់អ្នកជាមួយគ្រូ ឪពុកម្តាយ អ្នកផ្តល់ប្រឹក្សា ឬមិត្តភក្តិ។</p>
          </div>
          <div className="tip-card">
            <h3>រក្សាភស្តុតាង</h3>
            <p>រក្សារូបថតអេក្រង់ សារផ្ញើ ឬកំណត់ត្រាដើម្បីឲ្យបញ្ហានេះត្រូវបានដោះស្រាយត្រឹមត្រូវ។</p>
          </div>
        </div>

        <div className="emergency-box">
          <h3>ត្រូវការជំនួយភ្លាមៗ?</h3>
          <p>ទាក់ទងអ្នកផ្តល់ប្រឹក្សា ឬគ្រូរបស់សាលាភ្លាមៗសម្រាប់ជំនួយ និងការការពារ។</p>
          <a href="#contact" className="btn btn-secondary">
            ទាក់ទងគ្រូ
          </a>
        </div>
      </section>

      <section className="panel" id="learn">
        <h2>រៀនអំពីការរំលោភបំពាននៅក្នុងសាលា</h2>
        <ul className="check-list">
          <li>ការរំលោភបំពានអាចមានទម្រង់ភាសា អាស្រ័យ ឬតាមអ៊ីនធឺណិត។</li>
          <li>មិនត្រឹមត្រូវទេក្នុងការអនុញ្ញាតឲ្យអ្នកធ្វើការរំលោភបំពាន ឬកាត់ក្រុមគ្នាទៅវិញទៅមក។</li>
          <li>ការព្យាករណ៍ សេចក្ដីគោរព និងរាយការណ៍អំពីបញ្ហាជួយធ្វើឲ្យសាលាមានសុវត្ថិភាពជាងមុន។</li>
        </ul>
      </section>

      <section className="panel" id="contact">
        <h2>ទាក់ទងគ្រូ ឬអ្នកផ្តល់ប្រឹក្សា</h2>
        <form>
          <label htmlFor="name">ឈ្មោះរបស់អ្នក</label>
          <input id="name" name="name" type="text" placeholder="បញ្ចូលឈ្មោះរបស់អ្នក" />

          <label htmlFor="email">អ៊ីមែលរបស់អ្នក</label>
          <input id="email" name="email" type="email" placeholder="name@example.com" />

          <label htmlFor="message">សារ</label>
          <textarea id="message" name="message" placeholder="ប្រាប់យើងអំពីជំនួយដែលអ្នកត្រូវការ..." />

          <button className="btn btn-primary" type="submit">
            ផ្ញើសារ
          </button>
        </form>
      </section>
    </div>
  )
}

export default App
