import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage-service.js'

const loggedinUser = {
  email: 'yuvalevi@appsus.com',
  fullname: 'Yuval Levy',
}

const gMails = [
  {
    id: 'e101',
    subject: 'Miss you tons',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com',
  },
  {
    id: 'e102',
    subject: 'Love you',
    body: 'How are things going at your end?',
    isRead: true,
    sentAt: 1551133930978,
    to: 'tomy@tomy.com',
  },
]

const MAILS_KEY = 'MAILS_DB'

export const mailService = {
  query,
  get,
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
