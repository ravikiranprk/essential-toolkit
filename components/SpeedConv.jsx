export default function SpeedConv() {
    return (
        <section>
            <section className="temp-conv-container">
                <div className="temp-conv-form-container">
                    <div className="temp-conv-input">
                        <select onChange={(e) => setCurrentSpeedType(e.target.value)} value={currentSpeedType}>
                            <option value="decimal">Decimal</option>
                            <option value="binary">Binary</option>
                            <option value="octal">Octal</option>
                            <option value="hexadecimal">Hexa Decimal</option>
                        </select>
                        <input type="text" value={currentNumber} onChange={(e) => setCurrentNumber(e.target.value)} />
                    </div>
                    <div className="text-xl">To</div>
                    <div className="temp-conv-input">
                        <select onChange={(e) => setConvertedNumberType(e.target.value)} value={convertedNumberType}>
                            <option value="binary">Binary</option>
                            <option value="octal">Octal</option>
                            <option value="hexadecimal">Hexa Decimal</option>
                            <option value="decimal">Decimal</option>
                        </select>
                        <input type="text" value={convertedNumber} onChange={(e) => setConvertedNumber(e.target.value)} disabled />
                    </div>
                    <div className="temp-conv-btn">
                        <button onClick={() => convertNumber(currentNumberType, convertedNumberType)}>Convert</button>
                    </div>
                </div>
            </section>
        </section>
    );
}