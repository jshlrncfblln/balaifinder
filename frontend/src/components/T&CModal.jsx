


export default function TCModal(){
    return (
        <div className="border rounded-lg shadow-lg relative max-w-sm">
            <div className="flex justify-end p-2">
                <button className="text-gray-400 bg-transparent hover:bg-red-500 hover:text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div className="p-6 pt-0 text-center">
                <h3 className="text-xl font-semibold text-gray-700 mt-5 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum rerum quam debitis voluptatibus voluptates ipsam quia consectetur. Ex nulla quia nobis sint ipsum temporibus voluptatem, maiores, dolores iusto minus rem.</h3>
            </div>
            <div className="mt-4 justify-end">
                <button></button>
            </div>
        </div> 
    )
}