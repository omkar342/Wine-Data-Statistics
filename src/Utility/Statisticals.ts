// Statisticals.ts

// Utility function to calculate mean
export function calculateMean(data: number[]): number {
    const sum = data.reduce((acc, item) => acc + item, 0);
    return sum / data.length;
}

// Utility function to calculate median
export function calculateMedian(data: number[]): number {
    const sortedData = data.sort((a, b) => a - b);
    const middle = Math.floor(sortedData.length / 2);
    if (sortedData.length % 2 === 0) {
        return (sortedData[middle - 1] + sortedData[middle]) / 2;
    } else {
        return sortedData[middle];
    }
}

// Utility function to calculate mode
export function calculateMode(data: number[]): number {
    if (data.length === 0) {
        throw new Error("Data array is empty");
    }

    const frequencyMap: Record<string, number> = {};
    data.forEach(item => {
        if (typeof item === 'number' && !isNaN(item)) {
            const key = String(item); // Convert the key to string
            frequencyMap[key] = (frequencyMap[key] || 0) + 1;
        }
    });

    let mode: number = parseFloat(Object.keys(frequencyMap)[0]); // Initialize mode with the first key
    let maxFrequency = frequencyMap[mode] || 0; // Initialize maxFrequency with the frequency of the first key
    for (const key in frequencyMap) {
        const frequency = frequencyMap[key];
        if (frequency > maxFrequency) {
            mode = parseFloat(key);
            maxFrequency = frequency;
        }
    }

    return mode;
}
