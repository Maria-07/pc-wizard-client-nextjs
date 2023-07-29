const Description = () => {
  return (
    <div className="my-16">
      <h1 className="text-lg text-gray-600 font-semibold border-gray-200 pb-2">
        Description
      </h1>
      <hr />
      <div className="my-5">
        <h1 className="text-lg text-gray-600 font-semibold border-gray-200 pb-2 my-1">
          Intel 11th Gen Core i9-11900K Rocket Lake Processor
        </h1>
        <p>
          This Core i9-11900K Processor comes with Intel Iris Xe Graphics 32
          graphics. This new 11th gen Rocket Lake microarchitecture is
          manufactured with the 14nm process that comes with eight cores and 16
          threads. As this chip is updated to the latest BIOS revision, it
          nicely fits into any Intel 400 and 500 series motherboards. Focusing
          on this, all the major motherboard manufacturers have already started
          BIOS updates for their 400 and 500 series lineup. These Processors
          also support 64-bit computing on Intel architecture require an Intel
          x86-64 (64 bit) architecture-enabled BIOS.
        </p>
      </div>
      <div>
        <h1 className="text-lg text-gray-600 font-semibold border-gray-200 pb-2">
          Core Benefits of the Processor
        </h1>
        <p>
          Intel 11th Generation Core i9-11900K Processor having the base
          frequency of 3.50 GHz that can be reached as max turbo frequency at
          5.30 GHz. The processor has a compatibility socket of LGA 1200 that is
          supported by 400 and 500 series Intel motherboards. It has a
          SmartCache of 16 MB containing 8 cores and 16 threads. With a bus
          speed of 8 GT/s, it has thermal design power (TDP) rating of 125W.
          This latest microchip has few expansion options such as 4.0 PCI
          express revision having configured up to 1x16, 2x8, 1x8+2x4, and a
          maximum of 20 lanes. Considering the memory this processor has a
          dual-channel of max 128GB of the size that supports up to DDR4-3200
          bus speed.
        </p>
      </div>
      <hr className="my-8" />
    </div>
  );
};

export default Description;
