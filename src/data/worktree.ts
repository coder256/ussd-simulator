export const worktree = [
  {
    id: 'momo-send',
    label: 'Send Money',
    provider: 'MTN MoMo',
    dialPrefix: '*165#',
    rootNode: 'start',
    nodes: {
      start: {
        type: 'menu',
        prompt: 'Send Money',
        options: [
          { label: 'Send to mobile number', digit: '1', next: 'recipient' },
          { label: 'Outside Uganda', digit: '2', next: 'account' },
          { label: 'Donations', digit: '3', next: 'account' },
          { label: 'Send to bank account', digit: '4', next: 'account' },
        ],
      },
      recipient: {
        type: 'input',
        prompt: 'Recipient number',
        placeholder: '0777123456',
        inputType: 'tel',
        next: 'amount',
      },
      amount: {
        type: 'input',
        prompt: 'Amount (UGX)',
        placeholder: '50000',
        inputType: 'number',
        next: 'reason',
      },
      reason: {
        type: 'input',
        prompt: 'Reason',
        placeholder: '50000',
        inputType: 'text',
        next: 'done',
      },
      done: {
        type: 'action',
        prompt:
          'Ready to dial. Your Mobile Money PIN will be requested by the network on the next screen — it is never typed into this app.',
      },
    },
  },
]
