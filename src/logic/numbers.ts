export function numberFormatterWithnumerOfDigits(num: number, digits: number): string {
  if (num === null || num === undefined || isNaN(num)) {
    return '0'
  }

  const numStr = num.toString()

  if (numStr.length >= digits) {
    return numStr
  }

  const quantZero = digits - numStr.length

  return `${'0'.repeat(quantZero)}${numStr}`
}

export function numerCompactNotationFormatter(num: number): string {
  if (num === null || num === undefined || isNaN(num)) {
    return '0'
  }

  const absNum = Math.abs(num)
  const signo = num < 0 ? '-' : ''

  const unidades = [
    { valor: 1e12, sufijo: 'B' },
    { valor: 1e9, sufijo: 'M' },
    { valor: 1e6, sufijo: 'M' },
    { valor: 1e3, sufijo: 'Mil' },
  ]

  for (const unidad of unidades) {
    if (absNum >= unidad.valor) {
      const cantidad = (absNum / unidad.valor).toFixed(1)

      const cantidadFormateada = cantidad.endsWith('.0') ? cantidad.slice(0, -2) : cantidad
      return `${signo}${cantidadFormateada} ${unidad.sufijo}`
    }
  }

  return `${signo}${absNum.toString()}`
}
