const CalculateSizeMixin = {
    methods: {
        calculateOffsetSize({elements, index, ratio}) {
            const offsetArr = Array(elements.length).fill([0, 0])
            const arrLength = elements.length;
            for (let i = index + 1; i < arrLength; i++) {
                const item = elements[i];
                const offset = item.$el.clientWidth * ratio / 2;
                const lastArr = offsetArr[i - 1];
                const lastDiffer = lastArr[0];
                const lastTotalOffset = lastArr[1];
                offsetArr[i] = [offset, lastTotalOffset - lastDiffer - offset];
            }
            for (let j = index - 1; j >= 0; j--) {
                const item = elements[j];
                const offset = item.$el.clientWidth * ratio / 2;
                const lastArr = offsetArr[j + 1];
                const lastDiffer = lastArr[0];
                const lastTotalOffset = lastArr[1];
                offsetArr[j] = [offset, lastTotalOffset + lastDiffer + offset];
            }
            return offsetArr;
        },

    }
}

export  default CalculateSizeMixin;
