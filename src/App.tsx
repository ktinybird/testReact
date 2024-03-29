// import logo from './logo.svg';
import "./App.css";

function App() {
    const a: number = 1;
    const b = a;
    console.log(b);

    type Camry = {
        a?: string;
        b?: boolean;
        c?: number;
    };

    type TestDto = {
        car?: [Camry];
    };

    type TestDto1 = {
        car?: {
            a?: string;
            b?: boolean;
            c?: number;
        };
    };

    const testFn = (): void => {
        const camry: Camry = {
            a: "test",
            b: true,
            c: 1
        };
        const testDto: TestDto = {
            car: [camry]
        };

        testDto.car?.push({ ...camry, c: 2 });
        testDto.car?.push({ ...camry, c: 2 });
        testDto.car?.push({ ...camry, c: 1 });
        testDto.car?.push({ ...camry, c: 2 });
        testDto.car?.push({ ...camry, c: 1 });

        const { car: value } = testDto;

        const extractDto = {
            value
        };
        console.log("■■■", extractDto.value);

        const a: number[] = [0];
        //  const b : object = {...a};
        //  console.log("###", a[0]);

        let filterDto = extractDto.value?.filter((item) => item.c === 1);

        extractDto.value?.map(
            (item: Camry, index: number, arr: Array<Camry>) => {
                //console.log("item>>{}##{}", item.c, arr);
            }
        );

        console.log("■■■", filterDto);

        type AllowedKeys = "name" | "age";

        // interface 대신 여기에 type을 사용하세요.
        type Person = Record<AllowedKeys, unknown>;

        const Human: Person = {
            name: "Steve",
            age: 42
        };
        console.log("@Human@", Human);
    };

    return (
        <div className="App">
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                hello
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <input type="button" onClick={testFn} value="클릭"></input>
            </header>
        </div>
    );
}

export default App;
