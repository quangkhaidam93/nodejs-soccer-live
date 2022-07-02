const cron = require('node-cron');
const messageService = require('../components/message/service');

class CronJob {
  scheduleDeleteOldMessages() {
    cron.schedule('0 0 */2 * *', function() {
      messageService.deleteMessageAllOldMessages();
      console.log('running a task every minute');
    });
  }
}

module.exports = CronJob;