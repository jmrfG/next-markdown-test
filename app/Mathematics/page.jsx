import Link from 'next/link';

const MathTopics = () => (
    <div className="ordered-list">
        <h1>
            Index
        </h1>
        <ol>
            <li>
                <Link href="/Mathematics/algebra">
                    Algebra
                </Link>
                <ol>
                    <li>
                        <Link href='/Mathematics/algebra/equations'>
                            Equations
                        </Link>
                    </li>
                    <li>
                        <Link href='/Mathematics/algebra/inequalities'>
                            Inequalities
                        </Link>
                    </li>
                    <li>
                        <Link href='/Mathematics/algebra/functions'>
                            Functions
                        </Link>
                    </li>
                    <li>
                        <Link href='/Mathematics/algebra/polynomials'>
                            Polynomials
                        </Link>
                    </li>
                    <li>
                        <Link href='/Mathematics/algebra/matrices'>
                            Matrices
                        </Link>
                    </li>
                </ol>
            </li>
            <li>
                <Link href="/Mathematics/calculus">
                    Calculus
                </Link>
                <ol>
                    <li>
                        <Link href="/Mathematics/calculus/limits">
                            Limits
                        </Link>
                    </li>
                    <li>
                        <Link href="/Mathematics/calculus/derivatives">
                            Derivatives
                        </Link>
                    </li>
                    <li>
                        <Link href="/Mathematics/calculus/integrals">
                            Integrals
                        </Link>
                    </li>
                    <li>
                        <Link href="/Mathematics/calculus/multivariable">
                            Multivariable Calculus
                        </Link>
                    </li>
                </ol>
            </li>
            <li>
                <Link href="/Mathematics/geometry">
                    Geometry
                </Link>
                <ol>
                    <li>
                        <Link href="/Mathematics/geometry/euclidean">
                            Euclidean Geometry
                        </Link>
                    </li>
                    <li>
                        <Link href="/Mathematics/geometry/non-euclidean">
                            Non-Euclidean Geometry
                        </Link>
                    </li>
                    <li>
                        <Link href="/Mathematics/geometry/topology">
                            Topology
                        </Link>
                    </li>
                    <li>
                        <Link href="/Mathematics/geometry/differential">
                            Differential Geometry
                        </Link>
                    </li>
                </ol>
            </li>
            <li>
                <Link href="/Mathematics/trigonometry">
                    Trigonometry
                </Link>
                <ol>
                    <li>
                        <Link href="/Mathematics/trigonometry/trigonometric-functions">
                            Trigonometric Functions
                        </Link>
                    </li>
                    <li>
                        <Link href="/Mathematics/trigonometry/identities">
                            Identities
                        </Link>
                    </li>
                    <li>
                        <Link href="/Mathematics/trigonometry/applications">
                            Applications
                        </Link>
                    </li>
                    <li>
                        <Link href="/Mathematics/trigonometry/complex-numbers">
                            Complex Numbers
                        </Link>
                    </li>
                </ol>
            </li>
            <li>
                <Link href="/Mathematics/number-theory">
                    Number Theory
                </Link>
                <ol>
                    <li>
                        <Link href="/Mathematics/number-theory/divisibility">
                            Divisibility
                        </Link>
                    </li>
                    <li>
                        <Link href="/Mathematics/number-theory/prime-numbers">
                            Prime Numbers
                        </Link>
                    </li>
                    <li>
                        <Link href="/Mathematics/number-theory/modular-arithmetic">
                            Modular Arithmetic
                        </Link>
                    </li>
                    <li>
                        <Link href="/Mathematics/number-theory/cryptography">
                            Cryptography
                        </Link>
                    </li>
                </ol>
            </li>
        </ol>
    </div>

);

export default MathTopics;
