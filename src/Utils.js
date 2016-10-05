export class Iter {

    static toArray(iter, map = null) {
        var result = [];
        var next;
        while (!(next = iter.next()).done) {
            result.push(map ? map(next.value) : next.value);
        }

        return result;
    }

    static find(iter, filter) {
        var next;
        while (!(next = iter.next()).done) {
            if (filter(next.value)) {
                return next.value;
            }
        }

        return null;
    }
}

export class Arr {
    static contains(arr, filter) {
        for (var i = 0; i < arr.length; i++) {
            if (filter(arr[i])) {
                return true;
            }
        }
        return false;
    }
}