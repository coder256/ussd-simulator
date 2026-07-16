import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { worktree } from '@/data/worktree'
import type { Node, Service, Option } from '@/types'

export const useUssdStore = defineStore('ussd', () => {
  const currentNode = ref<Node | null>(null)
  const currentService = ref<Service | null>(null)
  const history = ref<Node[]>([])
  // const services = ref<Service[]>(worktree as Service[])
  const services = ref<Service[]>(JSON.parse(JSON.stringify(worktree)))
  const dialCode = ref<string>('')

  const selectService = (service: Service) => {
    currentService.value = service
    selectNode(service.nodes[service.rootNode] as Node)
    updateDialCode(service.dialPrefix)
  }

  const selectNode = (node: Node) => {
    // console.log('select node', node)
    currentNode.value = node
    history.value.push(node)
  }

  const selectOption = (option: Option) => {
    updateDialCode(option.digit)

    if (!currentService.value) return

    const nextNode = currentService.value.nodes[option.next]
    if (nextNode) {
      selectNode(nextNode)
    }
  }

  const handleInput = (input: string) => {
    if (!currentNode.value) return
    updateDialCode(input)
    if (currentNode.value.next) {
      const nextNode = currentService.value?.nodes[currentNode.value.next]
      if (nextNode) {
        selectNode(nextNode)
      } else {
        console.log('No next node')
      }
    }
  }

  const updateDialCode = (input: string) => {
    if (!currentNode.value) return

    // TODO: handle input
    if (dialCode.value == '') {
      dialCode.value = input
    } else {
      //add input value to code before the last #
      dialCode.value = dialCode.value.replace('#', '') + `*${input}` + '#'
    }
  }

  const toTelHref = computed(() => {
    // tel: links must have # escaped as %23 or Android's dialer will
    // sometimes truncate the string at the hash.
    return `tel:${encodeURIComponent(dialCode.value).replace(/%2A/gi, '*')}`
  })

  const back = () => {
    if (history.value.length < 2) {
      reset()
      return
    }
    // currentNode.value = history.value[history.value.length - 2]
    history.value.pop()
    // selectNode(history.value[history.value.length - 1] as Node)
    currentNode.value = history.value[history.value.length - 1] as Node
  }

  const reset = () => {
    currentNode.value = null
    currentService.value = null
    history.value = []
    dialCode.value = ''
  }

  return {
    services,
    currentNode,
    history,
    dialCode,
    selectService,
    selectOption,
    back,
    reset,
    handleInput,
    toTelHref,
  }
})
