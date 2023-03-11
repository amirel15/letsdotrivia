const useColor = () => {
    const colors = ['bg-gray-500', 'bg-cyan-500', 'bg-cyan-500', 'bg-gray-500']
    const getColor = (index) => colors[index % colors.length]
    return {getColor}
}

export default useColor