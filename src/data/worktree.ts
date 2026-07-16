export const worktree = [
  {
    id: 'momo-send',
    label: 'Send Money',
    provider: 'MTN MoMo',
    dialPrefix: '*165*1#',
    rootNode: 'start',
    nodes: {
      start: {
        type: 'menu',
        prompt: 'Send Money',
        options: [
          { label: 'Send to mobile number', digit: '1', next: 'done' },
          { label: 'Outside Uganda', digit: '2', next: 'done' },
          { label: 'Donations', digit: '3', next: 'done' },
          { label: 'Send to bank account', digit: '4', next: 'done' },
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
        placeholder: '500',
        inputType: 'number',
        next: 'reason',
      },
      reason: {
        type: 'input',
        prompt: 'Reason',
        placeholder: 'Pocket money',
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
  {
    id: 'momo-pay',
    label: 'MOMO pay',
    provider: 'MTN MoMo',
    dialPrefix: '*165*3#',
    rootNode: 'recipient',
    nodes: {
      recipient: {
        type: 'input',
        prompt: 'Merchant Code',
        placeholder: '123456',
        inputType: 'tel',
        next: 'amount',
      },
      amount: {
        type: 'input',
        prompt: 'Amount (UGX)',
        placeholder: '500',
        inputType: 'number',
        next: 'source',
      },
      source: {
        type: 'menu',
        prompt: 'Pay with MOMO',
        options: [
          { label: 'Mobile Money', digit: '1', next: 'done' },
          { label: 'Senkyu Points', digit: '2', next: 'done' },
        ],
      },
      done: {
        type: 'action',
        prompt:
          'Ready to dial. Your Mobile Money PIN will be requested by the network on the next screen — it is never typed into this app.',
      },
    },
  },
  {
    id: 'momo-account',
    label: 'MOMO account',
    provider: 'MTN MoMo',
    dialPrefix: '*165*8#',
    rootNode: 'start',
    nodes: {
      start: {
        type: 'menu',
        prompt: 'My Account',
        options: [{ label: 'Account balance', digit: '1', next: 'done' }],
      },
      done: {
        type: 'action',
        prompt:
          'Ready to dial. Your Mobile Money PIN will be requested by the network on the next screen — it is never typed into this app.',
      },
    },
  },
]
