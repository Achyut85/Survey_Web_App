
const OverFlowMenu = ({items , onClick  }) => {
  return ( 
    <div className="flex flex-col gap-2 bg-white shadow-[0_-1px_5px_rgba(0,0,0,0.2)] p-2 rounded ">
           {
            items && items.map((item) => (
                <div className=" flex items-center gap-2 hover:text-blue-700 hover:bg-blue-100 group px-1 py-[2px] transition select-none "  key={item.id} onClick={(e) => {
                  e.stopPropagation();
                  onClick(item.id);
                }}>
                <span>{ item.icon && <item.icon/>}</span>
                <span className="text-nowrap">{item.title}</span>
                </div>
            ))           
          }
    </div>
  )
}

export default OverFlowMenu