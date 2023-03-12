const useColor = () => {
    const colors = ['bg-indigo-800', 'bg-cyan-800', 'bg-blue-800', 'bg-sky-800']
    const getColor = (index) => colors[index % colors.length]
    return {getColor}
}

export default useColor