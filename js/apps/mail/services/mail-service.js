import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage-service.js'

const loggedinUser = {
  email: 'yuvalevi@appsus.com',
  fullname: 'Yuval Levy',
}

const gMails = [
  {
    id: 'e101',
    from: 'Roi Shemer',
    subject: 'Miss you tons',
    body: 'Would love to catch up sometimes. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut nam ipsum voluptatum iure doloremque facere beatae ipsam voluptas. Optio facere qui atque omnis at? Molestiae natus ex autem temporibus.',
    isRead: false,
    sentAt: 1656574550000,
    to: 'yuvalevi@appsus.com',
  },
  {
    id: 'e102',
    from: 'Tal Gefen',
    subject: 'Love you',
    body: 'How are things going at your end? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut nam ipsum voluptatum iure doloremque facere beatae ipsam voluptas. Optio facere qui atque omnis at? Molestiae natus ex autem temporibus.',
    isRead: true,
    sentAt: 1647761750000,
    to: 'yuvalevi@appsus.com',
  },
  {
    id: 'e103',
    from: 'Nov Fine',
    subject: 'Hi There',
    body: 'just wanted to know how are you feeling? I thought about you today Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut nam ipsum voluptatum iure doloremque facere beatae ipsam voluptas. Optio facere qui atque omnis at? Molestiae natus ex autem temporibus.',
    isRead: false,
    sentAt: 1650008150000,
    to: 'yuvalevi@appsus.com',
  },
  {
    id: 'e104',
    from: 'Yuval Levi',
    subject: 'When will you come?',
    body: 'Hi! i was wondering when will you come to see us? it has been a long time seens we saw each other? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut nam ipsum voluptatum iure doloremque facere beatae ipsam voluptas. Optio facere qui atque omnis at? Molestiae natus ex autem temporibus.',
    isRead: true,
    sentAt: 1636529750000,
    to: 'tomy@appsus.com',
  },
  {
    id: 'e105',
    from: 'Yuval Levi',
    subject: 'How was your exam?',
    body: 'Hi, How are you? Did you get that results yet? I am queries Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut nam ipsum voluptatum iure doloremque facere beatae ipsam voluptas. Optio facere qui atque omnis at? Molestiae natus ex autem temporibus.',
    isRead: false,
    sentAt: 1639208150000,
    to: 'momo@appsus.com',
  },
  {
    id: 'e108',
    from: 'Osnat Chafetz',
    subject: "Don't forget to buy",
    body: 'Can you please buy me good Chocolate from Pariz? I fancy it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut nam ipsum voluptatum iure doloremque facere beatae ipsam voluptas. Optio facere qui atque omnis at? Molestiae natus ex autem temporibus.',

    isRead: true,
    sentAt: 1614065750000,
    to: 'yuvalevi@appsus.com',
  },
  {
    id: 'e109',
    from: 'Yuval Levi',
    subject: 'Finished it all?',
    body: 'I wanted to check with you.. sis you finish everything that was on your list? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut nam ipsum voluptatum iure doloremque facere beatae ipsam voluptas. Optio facere qui atque omnis at? Molestiae natus ex autem temporibus.',
    isRead: false,
    sentAt: 1622187350000,
    to: 'momo@appsus.com',
  },
  {
    id: 'e110',
    from: 'Dan Tesler',
    subject: 'I have an idea',
    body: 'What to you think of going to a trip together for a fwe days? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut nam ipsum voluptatum iure doloremque facere beatae ipsam voluptas. Optio facere qui atque omnis at? Molestiae natus ex autem temporibus.',
    isRead: true,
    sentAt: 1628321750000,
    to: 'yuvalevi@appsus.com',
  },
  {
    id: 'e101',
    from: 'Roi Shemer',
    subject: 'Miss you tons',
    body: 'Would love to catch up sometimes. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut nam ipsum voluptatum iure doloremque facere beatae ipsam voluptas. Optio facere qui atque omnis at? Molestiae natus ex autem temporibus.',
    isRead: false,
    sentAt: 1656574550000,
    to: 'yuvalevi@appsus.com',
  },
  {
    id: 'e102',
    from: 'Tal Gefen',
    subject: 'Love you',
    body: 'How are things going at your end? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut nam ipsum voluptatum iure doloremque facere beatae ipsam voluptas. Optio facere qui atque omnis at? Molestiae natus ex autem temporibus.',
    isRead: true,
    sentAt: 1647761750000,
    to: 'yuvalevi@appsus.com',
  },
  {
    id: 'e103',
    from: 'Nov Fine',
    subject: 'Hi There',
    body: 'just wanted to know how are you feeling? I thought about you today Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut nam ipsum voluptatum iure doloremque facere beatae ipsam voluptas. Optio facere qui atque omnis at? Molestiae natus ex autem temporibus.',
    isRead: false,
    sentAt: 1650008150000,
    to: 'yuvalevi@appsus.com',
  },
  {
    id: 'e104',
    from: 'Yuval Levi',
    subject: 'When will you come?',
    body: 'Hi! i was wondering when will you come to see us? it has been a long time seens we saw each other? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut nam ipsum voluptatum iure doloremque facere beatae ipsam voluptas. Optio facere qui atque omnis at? Molestiae natus ex autem temporibus.',
    isRead: true,
    sentAt: 1636529750000,
    to: 'tomy@appsus.com',
  },
  {
    id: 'e105',
    from: 'Yuval Levi',
    subject: 'How was your exam?',
    body: 'Hi, How are you? Did you get that results yet? I am queries Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut nam ipsum voluptatum iure doloremque facere beatae ipsam voluptas. Optio facere qui atque omnis at? Molestiae natus ex autem temporibus.',
    isRead: false,
    sentAt: 1639208150000,
    to: 'momo@appsus.com',
  },
  {
    id: 'e104',
    from: 'Yuval Levi',
    subject: 'When will you come?',
    body: 'Hi! i was wondering when will you come to see us? it has been a long time seens we saw each other? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut nam ipsum voluptatum iure doloremque facere beatae ipsam voluptas. Optio facere qui atque omnis at? Molestiae natus ex autem temporibus.',
    isRead: true,
    sentAt: 1636529750000,
    to: 'tomy@appsus.com',
  },
  {
    id: 'e105',
    from: 'Yuval Levi',
    subject: 'How was your exam?',
    body: 'Hi, How are you? Did you get that results yet? I am queries Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut nam ipsum voluptatum iure doloremque facere beatae ipsam voluptas. Optio facere qui atque omnis at? Molestiae natus ex autem temporibus.',
    isRead: false,
    sentAt: 1639208150000,
    to: 'momo@appsus.com',
  },
  {
    id: 'e105',
    from: 'Yuval Levi',
    subject: 'How was your exam?',
    body: 'Hi, How are you? Did you get that results yet? I am queries Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut nam ipsum voluptatum iure doloremque facere beatae ipsam voluptas. Optio facere qui atque omnis at? Molestiae natus ex autem temporibus.',
    isRead: false,
    sentAt: 1639208150000,
    to: 'momo@appsus.com',
  },
]

const MAILS_KEY = 'MAILS_DB'

export const mailService = {
  query,
  get,
  remove,
  save,
  getEmptyMail,
  putMail,
  // getNextMailId,
}

_createMails()

function query() {
  return storageService.query(MAILS_KEY)
}

function get(mailId) {
  return storageService.get(MAILS_KEY, mailId)
}

function _createMails() {
  let mails = utilService.loadFromStorage(MAILS_KEY)
  if (!mails || !mails.length || mails === 'undefined') {
    utilService.saveToStorage(MAILS_KEY, gMails)
  }
  return mails
}

// function remove(mailId) {
//   const mails = query()
//   console.log(mails)
//   const idx = mails.findIndex((mail) => mail.id === mailId)
//   mails.splice(idx, 1)
//   utilService.saveToStorage(MAILS_KEY, mails)
// }

function remove(mailId) {
  // return Promise.reject('Big Error Badd')
  return storageService.remove(MAILS_KEY, mailId)
}

function save(mail) {
  if (mail.id) return storageService.put(MAILS_KEY, mail)
  else return storageService.post(MAILS_KEY, mail)
}

// function getNextMailId(mailId) {
//   return storageService.query(MAILS_KEY).then((mails) => {
//     const idx = mails.findIndex((mail) => mail.id === mailId)
//     return idx < mails.length - 1 ? mails[idx + 1].id : mails[0].id
//   })
// }

function getEmptyMail() {
  return {
    id: '',
    from: loggedinUser.fullname,
    subject: '',
    body: '',
    isRead: false,
    sentAt: Date.now(),
    to: loggedinUser.email,
  }
}
function putMail(updatedMail) {
  return storageService.put(MAILS_KEY, updatedMail)
}
