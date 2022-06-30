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
    body: 'Would love to catch up sometimes',
    longTxt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut nam ipsum voluptatum iure doloremque facere beatae ipsam voluptas. Optio facere qui atque omnis at? Molestiae natus ex autem temporibus.',
    isRead: false,
    sentAt: 1656574550000,
    to: 'momo@appsus.com',
  },
  {
    id: 'e102',
    from: 'Tal Gefen',
    subject: 'Love you',
    body: 'How are things going at your end?',
    longTxt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut nam ipsum voluptatum iure doloremque facere beatae ipsam voluptas. Optio facere qui atque omnis at? Molestiae natus ex autem temporibus.',
    isRead: true,
    sentAt: 1647761750000,
    to: 'tomy@appsus.com',
  },
  {
    id: 'e103',
    from: 'Nov Fine',
    subject: 'Hi There',
    body: 'just wanted to know how are you feeling? I thought about you today',
    longTxt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut nam ipsum voluptatum iure doloremque facere beatae ipsam voluptas. Optio facere qui atque omnis at? Molestiae natus ex autem temporibus.',
    isRead: false,
    sentAt: 1650008150000,
    to: 'momo@appsus.com',
  },
  {
    id: 'e104',
    from: 'Sinai Wilson',
    subject: 'When will you come?',
    body: 'Hi! i was wondering when will you come to see us? it has been a long time seens we saw each other?',
    longTxt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut nam ipsum voluptatum iure doloremque facere beatae ipsam voluptas. Optio facere qui atque omnis at? Molestiae natus ex autem temporibus.',
    isRead: true,
    sentAt: 1636529750000,
    to: 'tomy@appsus.com',
  },
  {
    id: 'e105',
    from: 'Yael Melman',
    subject: 'How was your exam?',
    body: 'Hi, How are you? Did you get that results yet? I am queries',
    longTxt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut nam ipsum voluptatum iure doloremque facere beatae ipsam voluptas. Optio facere qui atque omnis at? Molestiae natus ex autem temporibus.',
    isRead: false,
    sentAt: 1639208150000,
    to: 'momo@appsus.com',
  },
  {
    id: 'e106',
    from: 'Hila Snir',
    subject: 'I have a secret',
    body: 'Hi, I have something personal to tell you, can I count on you not to tell anyone?',
    longTxt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut nam ipsum voluptatum iure doloremque facere beatae ipsam voluptas. Optio facere qui atque omnis at? Molestiae natus ex autem temporibus.',
    isRead: true,
    sentAt: 1551133939631,
    to: 'tomy@appsus.com',
  },
  {
    id: 'e107',
    from: 'Yomi Harel',
    subject: 'WOW! That was fun',
    body: 'It was so nice seeing you last weekend, we must meet again and spend time together',
    isRead: false,
    sentAt: 1634456150000,
    to: 'momo@appsus.com',
  },
  {
    id: 'e108',
    from: 'Osnat Chafetz',
    subject: "Don't forget to buy",
    body: 'Can you please buy me good Chocolate from Pariz? I fancy it.',

    isRead: true,
    sentAt: 1614065750000,
    to: 'tomy@appsus.com',
  },
  {
    id: 'e109',
    from: 'Shaul Rifman',
    subject: 'Finished it all?',
    body: 'I wanted to check with you.. sis you finish everything that was on your list?',
    isRead: false,
    sentAt: 1622187350000,
    to: 'momo@appsus.com',
  },
  {
    id: 'e110',
    from: 'Dan Tesler',
    subject: 'I have an idea',
    body: 'What to you think of going to a trip together for a fwe days?',
    isRead: true,
    sentAt: 1628321750000,
    to: 'tomy@appsus.com',
  },
]

const MAILS_KEY = 'MAILS_DB'

export const mailService = {
  query,
  get,
  remove,
  // addReview,
  // getEmptyReview,
  // removeReview,
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

function remove(bookId) {
  const books = query()
  const idx = books.findIndex((book) => book.id === bookId)
  books.splice(idx, 1)
  utilService.saveToStorage(bookS_KEY, books)
}

// function getEmptyReview() {
//   return {
//     rederName: '',
//     rate: '',
//     readingDate: '',
//     bookReview: '',
//   }
// }

// function addReview(mailId, review) {
//   review.id = utilService.makeId()
//   return get(mailId).then((mail) => {
//     if (!mail.reviews) mail.reviews = []
//     mail.reviews.push(review)
//     return storageService.put(MAILS_KEY, mail)
//   })
// }

// function removeReview(mailId, reviewId) {
//   return get(mailId).then((mail) => {
//     const idx = mail.reviews.findIndex((review) => review.id === reviewId)
//     mail.reviews.splice(idx, 1)
//     return storageService.put(MAILS_KEY, mail)
//   })
// }
