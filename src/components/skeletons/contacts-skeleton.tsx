const ContactsSkeleton = () => {
  return (

    <div className="animate-pulse mt-10 grid grid-cols-fs-contact w-full justify-evenly lg:justify-between gap-x-11 gap-y-12">
        {
            [...new Array(10)].map((_, idx) => (

                <div className="bg-fs-beige-bg-body opacity-60  flex flex-col gap-3 items-center justify-center p-3 ">

                <div className="flex  w-full justify-start items-center gap-2">
                    {/* Image */}
                    <div className="shrink-0 w-12 h-12 bg-fs-beige"></div>

                    {/* Info */}
                    <div className="flex items-start gap-2">
                    {/* Status */}

                    {/* Name */}
                    <div>
                        {/* FirstName */}
                        <div className="space-y-2">
                        <div className="h-1 w-14 bg-fs-beige-bg-header" />
                        <div className="h-1 w-20 bg-fs-beige-bg-header" />
                        </div>

                        {/* lastName */}
                        <div className="space-y-2 mt-2">
                        <div className="h-1 w-14 bg-fs-beige-bg-header" />
                        <div className="h-1 w-20 bg-fs-beige-bg-header" />
                        </div>
                    </div>
                    </div>
                </div>

                <div className="flex gap-3 w-full">
                    <button
                    className="flex-1 p-4 border-[2px] border-fs-dark-border bg-fs-dark-border text-fs-beige font-semibold"
                    >
                    
                    </button>
                    <button
                    className="flex-1 p-4 border-[2px] bg-fs-beige opacity-55"
                    >
                    
                    </button>
                </div>
                </div>

            ))

        }
    </div>
  );
};

export default ContactsSkeleton;
