import { render, screen } from '@testing-library/react';
import People from './People';

jest.mock('./connections-service')
import { getPeople } from './connections-service'


test('renders List of People Page', () => {
    render(<People />);
    const heading = screen.getByText(/List of People/i);
    expect(heading).toBeInTheDocument();
});

test('gets a list of people and renders it', async () => {
    getPeople.mockResolvedValue([{name: "Alan", role: 'Software Engineer', interests: 'football'}, {name: "Gagan", role: 'Designer', interests: 'Books'}])
    render(<People />);

    expect(await screen.findByText(/Alan/i)).toBeInTheDocument()
    expect(await screen.findByText(/Software Engineer/i)).toBeInTheDocument()
    expect(await screen.findByText(/football/i)).toBeInTheDocument()

    expect(await screen.findByText(/Gagan/i)).toBeInTheDocument()
    expect(await screen.findByText(/Designer/i)).toBeInTheDocument()
    expect(await screen.findByText(/Books/i)).toBeInTheDocument()
});